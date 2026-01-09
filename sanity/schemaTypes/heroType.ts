import { DefineSchemaOptions } from 'sanity'

export const heroType = {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Small Title (Top)',
            type: 'string',
            initialValue: 'The Art of',
        },
        {
            name: 'subtitle',
            title: 'Big Subtitle (Red)',
            type: 'string',
            initialValue: 'Coffee',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Explore Menu',
        },
    ],
}
