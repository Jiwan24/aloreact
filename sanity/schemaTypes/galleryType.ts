import { DefineSchemaOptions } from 'sanity'

export const galleryType = {
    name: 'gallery',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title / Caption',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
}
