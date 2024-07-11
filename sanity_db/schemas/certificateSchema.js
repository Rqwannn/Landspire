export default {
    name: 'certificates',
    type: 'document',
    title: 'Certificates',
    fields: [
      {
        name: 'certificates_id',
        title: 'Certificates ID',
        description: 'Unique identifier for the document',
        type: 'string',
      },
      {
        name: 'name_owner',
        type: 'string',
        title: 'Nama Pemilik',
      },
      {
        name: 'nik',
        type: 'string',
        title: 'NIK',
      },
      {
        name: 'ownership_rights',
        type: 'string',
        title: 'Ownership Rights',
      },
      {
        name: 'date_of_issuance',
        type: 'string',
        title: 'Date of Issuance',
      },
      {
        name: 'land_address',
        type: 'string',
        title: 'Land Address ',
      },
      {
        name: 'land_area',
        type: 'string',
        title: 'Land Area',
      },
      {
        name: 'certificate_file',
        type: 'string',
        title: 'Certificate File',
      },
      {
        name: 'isCertificateImageNft',
        type: 'boolean',
        title: 'Is Certificate Image NFT',
      },
      {
        name: 'timestamp',
        type: 'datetime',
        title: 'Timestamp',
      },
      {
        name: 'account',
        title: 'Account',
        type: 'reference',
        to: [{ type: 'users' }],
      },
    ],
  }