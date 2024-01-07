
import { fields, collection } from '@keystatic/core';
import defaultContentField from '../editor/default';

export default collection({
    label: "Guide all'acquisto",
    slugField: 'title',
    path: 'src/content/acquisto/*',
    format: { contentField: 'content' },
    schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: defaultContentField({
            label: 'Contenuto',
        }),
    },
})