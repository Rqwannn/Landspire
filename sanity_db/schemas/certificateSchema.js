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
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'users' }],
      },
    ],
  }