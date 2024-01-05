
import { fields, collection } from '@keystatic/core';

export default collection({
    label: "Schema.org",
    slugField: 'title',
    path: 'src/data/schema-org/*',
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