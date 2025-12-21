import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { categoryType } from './categoryType'
import { tagType } from './tagType'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [postType, categoryType, tagType],
}
