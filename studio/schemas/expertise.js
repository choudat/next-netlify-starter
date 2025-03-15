export default {
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: Rule => Rule.required().min(1)
    }
  ]
}
