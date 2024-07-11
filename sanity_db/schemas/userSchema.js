export default {
    name: 'users',
    type: 'document',
    title: 'Users',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'nik',
        type: 'string',
        title: 'NIK',
      },
      {
        name: 'walletAddress',
        type: 'string',
        title: 'Wallet Address',
      },
      {
        name: 'certificates',
        title: 'Certificate',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'certificates' }],
          },
        ],
      },

    ],
  }