
import { fields, collection } from '@keystatic/core';

export default collection({
    label: "Guide all'acquisto",
    slugField: 'title',
    path: 'src/content/acquisto/*',
    format: { contentField: 'content' },
    schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
            label: 'Content',
            formatting: true,
            dividers: true,
            links: true,
            images: true,
        }),
    },
})