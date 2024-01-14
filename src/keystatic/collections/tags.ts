
import { fields, collection } from '@keystatic/core';

export default collection({
    label: "Tag",
    slugField: 'title',
    path: 'src/data/tags/*',
    format: { data: "json" },
    schema: {
        title: fields.slug({name: { label: 'Nome' } }),
        breadcrumbUrl: fields.pathReference({
            label: "Link alla sezione correlata",
            pattern: 'src/data/content/**/*.mdoc'
        })
    },
})