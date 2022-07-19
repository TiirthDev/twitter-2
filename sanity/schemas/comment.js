export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference The Tweet the Comment is associated To;',
      type: 'reference',
      to: {
        type: 'tweet'
      }
    }
  ],
}
