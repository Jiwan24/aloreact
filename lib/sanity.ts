import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '../sanity/env'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = createImageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
})

export const urlFor = (source: any) => {
    return builder.image(source)
}
