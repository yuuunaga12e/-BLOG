import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

export const projectId = 'xc3ywkly'
export const dataset = 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: any) => {
  if (!source || !source.asset) return undefined
  return imageBuilder.image(source)
}
