export default {
  name: 'legalPages',
  title: 'Legal Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',  
      of: [{type: 'block'}]
    }
  ]
}
