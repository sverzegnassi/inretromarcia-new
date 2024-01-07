
import { fields, collection } from '@keystatic/core';

export default collection({
    label: "File caricati",
    slugField: 'title',
    path: 'public/uploads/*',
    format: { data: "json" },
    schema: {
        title: fields.slug({
            name: {
                label: 'Titolo / Didascalia',
                description: "Assegna un titolo significativo o una didascalia descrittiva ai tuoi elementi multimediali come immagini o video.",
            },
            slug: {
                label: "Nome del file",
                description: "Specifica un nome univoco alla risorsa multimediale o al documento caricato sul tuo sito."
            }
        }),
        description: fields.text({
            label: "Descrizione del File",
            description: "Fornisce una breve descrizione per identificare il contenuto o lo scopo di questo file.",
            multiline: true,
        }),
        file: fields.file({
            label: "Caricamento file",
            directory: "public/uploads",
            publicPath: "/uploads/"
        })
    },
})