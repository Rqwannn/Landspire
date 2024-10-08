import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Landspire',

  projectId: 'uqsv68h3',
  dataset: 'certificate',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
