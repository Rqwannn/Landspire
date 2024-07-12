"use client"

import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { client } from '@/app/libs/sanity'

export const LandspireContext = createContext()

export const LandspireProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const [certificates, setCertificate] = useState('')
  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  useEffect(() => {
    if (!currentAccount && appStatus == 'connected') return
    createUserAccount(currentAccount)
  }, [currentAccount, appStatus])


  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])

        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      router.push('/')
      setAppStatus('error')
    }
  }


  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      setAppStatus('error')
    }
  }

  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const userDoc = {
        _type: 'users',
        _id: userAddress,
        walletAddress: userAddress,
      }

      await client.createIfNotExists(userDoc)

      setAppStatus('connected')
    } catch (error) {
      router.push('/')
      setAppStatus('error')
    }
  }

  const getNftCertificate = async (certificateUri, isNft) => {
    if (isNft) {
      return `https://gateway.pinata.cloud/ipfs/${certificateUri}`
    } else if (!isNft) {
      return certificateUri
    }
  }

  const fetchCertificates = async (walletAddress) => {
    const query = `
      *[_type == "certificates" && account->walletAddress == "${walletAddress}"]{
        "account": account->{walletAddress},
        certificates_id,
        name_owner,
        ownership_rights,
        land_address,
        land_area,
        isCertificateNft,
        timestamp
      }|order(timestamp desc)
    `

    const params = { walletAddress }

    const sanityResponse = await client.fetch(query, params)

    setCertificate([])

    sanityResponse.forEach(async item => {

      const certificateUrl = await getNftCertificate(
        item.certificate_file,
        item.isCertificateNft,
      )

      if (item.isCertificateNft) {
        const newItem = {
          certificates_id: item.certificates_id,
          name_owner: item.name_owner,
          ownership_rights: item.ownership_rights,
          land_address: item.land_address,
          land_area: item.land_area,
          isCertificateNft: item.isCertificateNft,
          timestamp: item.timestamp,
          certificate: certificateUrl,
          account: {
            walletAddress: item.account.walletAddress,
          },
        }

        setCertificate(prevState => [...prevState, newItem])
      } else {
        setCertificate(prevState => [...prevState, item])
      }
    })
  }

  return (
    <LandspireContext.Provider
      value={{
        appStatus,
        currentAccount,
        certificates,
        connectWallet,
        setAppStatus,
        getNftCertificate,
        fetchCertificates,
      }}
    >
      {children}
    </LandspireContext.Provider>
  )
}