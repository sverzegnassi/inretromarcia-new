
import { fields, collection } from '@keystatic/core';

export default collection({
    label: "Corea del Sud",
    slugField: 'title',
    path: 'src/content/corea-del-sud/*',
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