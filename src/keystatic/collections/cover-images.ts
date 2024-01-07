import { fields, collection } from '@keystatic/core';

export default collection({
    label: "Immagini cover",
    slugField: 'title',
    path: 'src/assets/cover-images/*',
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
        alt: fields.text({
            label: "Testo alternativo (Alt text)",
            description: "Fornisce una descrizione testuale breve e significativa per le immagini presenti sul sito. Questo testo viene utilizzato dai lettori di schermo e dai motori di ricerca per comprender e interpretare il contenuto visivo. L'utilizzo del testo alternativo migliora l'accessibilità del sito e favorisce una migliore indicizzazione da parte dei motori di ricerca."
        }),
        file: fields.image({
            label: "Caricamento file",
            directory: "src/assets/cover-images",
            publicPath: "src/assets/cover-images/",   // This value is added to the frontmatter and utilized by AstroJS
        }),
        attribution: fields.object({
            source: fields.text({
                label: "Fonte",
                description: "Consente di specificare la fonte o l'URL da cui proviene l'immagine. Non ha effetti sulla visualizzazione e sulla distribuzione all'interno del sito. Utilizza questo campo per documentare la provenienza delle immagini utilizzate."
            }),
            author: fields.text({
                label: "Autore / Copyright",
                description: "Questo campo fornisce riconoscimento all'artista o al creatore dell'immagine e può essere utile per rispettare i diritti d'autore e attribuire correttamente la paternità dell'opera visiva."
            }),
            license: fields.text({
                label: "Licenza",
                description: "Specifica la licenza che regola l'utilizzo dell'immagine presente nei tuoi contenuti. Utilizza questa opzione per trasparenza e conformità legale riguardo alle licenze delle immagini utilizzate sul tuo sito."
            }),
            /* WORKAROUND: To span the fields on two columns, we need an even number of fields. */
            empty: fields.empty()
        }, {
            label: "Attribuzione",
            description: "Consente di fornire riconoscimento e crediti appropriati per il lavoro o il contenuto creativo utilizzato sul tuo sito.",
            layout: [6, 6, 6, 6]
        }),
    },
})