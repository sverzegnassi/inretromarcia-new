
import { fields, collection } from '@keystatic/core';

export default collection({
    label: "Categorie Post",
    slugField: 'title',
    path: 'src/data/schema-org/*',
    format: { data: "json" },
    schema: {
        title: fields.slug({name: { label: 'Title' } }),
    },
})