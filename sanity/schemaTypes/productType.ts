import { DefineSchemaOptions } from 'sanity'

export const productType = {
    name: 'product',
    title: 'Menu Item',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Item Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
        },
        {
            name: 'price',
            title: 'Price (e.g. 35k)',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link URL',
            type: 'string',
            initialValue: '/menu',
        },
        {
            name: 'image',
            title: 'Image',
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
            subtitle: 'price',
        },
    },
}
