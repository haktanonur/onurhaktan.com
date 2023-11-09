import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio-nextjs',

  projectId: '6p2onfig',
  dataset: 'productio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
