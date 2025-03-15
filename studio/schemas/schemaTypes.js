export default {
  name: 'exampleTypes',
  title: 'Example Types',
  type: 'document',
  fields: [
    // Basic types
    {
      name: 'string',
      title: 'String',
      type: 'string'
    },
    {
      name: 'number',
      title: 'Number',
      type: 'number'
    },
    {
      name: 'boolean',
      title: 'Boolean',
      type: 'boolean'
    },
    {
      name: 'datetime',
      title: 'Date and Time',
      type: 'datetime'
    },
    
    // Rich text & Media
    {
      name: 'richText',
      title: 'Rich Text',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true // enables editorial cropping
      }
    },
    
    // References & Objects
    {
      name: 'reference',
      title: 'Reference to another document',
      type: 'reference',
      to: [{type: 'page'}] // Updated from 'legalPage' to 'page'
    },
    {
      name: 'object',
      title: 'Nested Object',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string'
        },
        {
          name: 'description',
          type: 'text'
        }
      ]
    },
    
    // Arrays
    {
      name: 'array',
      title: 'Array of Items',
      type: 'array',
      of: [{type: 'string'}]
    },
    
    // Slugs
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200
      }
    },
    
    // URL
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    }
  ]
}
