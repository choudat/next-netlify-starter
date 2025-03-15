import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ConnEthics',
  
  projectId: '6mk1rm8s',
  dataset: 'production',
  
  plugins: [deskTool()],
  
  schema: {
    types: schemaTypes,
  },

  basePath: '/'
})
