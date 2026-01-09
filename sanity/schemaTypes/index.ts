import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './heroType'
import { productType } from './productType'
import { galleryType } from './galleryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, productType, galleryType],
}
