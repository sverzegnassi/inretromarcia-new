
import { fields, collection } from '@keystatic/core';
import defaultContentField from './editor/default';

type Props = {
    label: string,
    path?: `${string}/*` | `${string}/**` | `${string}/*/${string}` | `${string}/**/${string}`,
}

export default (props: Props) => {
    return {
        ...collection({
            ...props,
            
            slugField: 'title',
            entryLayout: 'content',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Titolo' } }),
                excerpt: fields.text({
                    label: "Estratto / Anteprima dell'articolo",
                    multiline: true,
                }),
                image: fields.relationship({
                    label: "Immagine cover",
                    collection: "coverImages"
                }),
                date: fields.datetime({
                    label: "Data di pubblicazione"
                }),
                draft: fields.checkbox({
                    label: "Modalità bozza",
                    description: "Se attivo, il contenuto non verrà pubblicato",
                    defaultValue: true,
                }),
                tags: fields.array(
                    fields.relationship({
                        label: "Tag",
                        description: "Associa parole chiave o categorie specifiche ai tuoi contenuti. I tag aiutano a organizzare e categorizzare il tuo materiale, facilitando la ricerca e la navigazione per gli utenti del tuo sito.",
                        collection: 'tags'
                    }),
                    {
                        label: "Tag",
                        itemLabel: props => props.value ?? "",
                    }
                ),
                linkTitle: fields.text({
                    label: "Titolo della pagina (link interno)",
                    description: "Consente di fornire una variante più breve del titolo, da utilizzare per i link all'interno della pagina."
                }),
                toc: fields.checkbox({
                    label: "Mostra tabella dei contenuti",
                    defaultValue: false,
                }),
                content: defaultContentField({
                    label: 'Contenuto',
                }),
                meta: fields.object({
                    title: fields.text({
                        label: "Meta title",
                        description: "Se impostato, consente di personalizzare il titolo della pagina che viene visualizzato nell'anteprima sui motori di ricerca. Se non configurato, il titolo della pagina verrà utilizzato mediante le regole di composizione predefinite (vedi \"Configurazione Sito Web\".)."
                    }),
                    description: fields.text({
                        label: "Meta description",
                        description: "Viene utilizzato dai motori di ricerca come suggerimento per generare l'anteprima della pagina. Se non impostato, i motori di ricerca utilizzeranno il testo contenuto nel campo `Estratto`.",
                        multiline: true
                    }),
                    canonicalURL: fields.url({
                        label: "URL canonico",
                        description: "Consente di specificare l'URL preferito per la pagina. Questo aiuta a risolvere potenziali problemi di duplicazione del contenuto e fornisce indicazioni chiare ai motori di ricerca su quale versione dell'URL preferire."
                    }),
                    schema: fields.text({
                        label: "Integrazione Schema.org",
                        description: "Consente di arricchire la struttura semantica delle tue pagine web incorporando marcature Schema.org. Questa integrazione fornisce informazioni dettagliate ai motori di ricerca su elementi specifici della pagina, migliorando la comprensione del contenuto e facilitando la presentazione ricca dei risultati di ricerca.",
                        multiline: true,
                    })
                },{
                    label: "Meta",
                    description: "Parametri per configurare e ottimizzare l'indicizzazione dei siti sui motori di ricerca."
                }),
                socialCard: fields.object({
                    // TODO: In the current Hugo setup (version 1.0 of the website), social card images are automatically generated.
                    // At some point, such functionality will be re-implemented.
                    image: fields.image({
                        label: "Immagine della card",
                        description: "Personalizza l'immagine associata al tuo contenuto quando viene condiviso. Se non fornita, l'Immagine Cover verrà utilizzata.",
                        directory: "src/assets/social-cards",
                        publicPath: "/src/assets/social-cards/",   // This value is added to the frontmatter and utilized by AstroJS
                    }),
                    title: fields.text({
                        label: "Titolo della card",
                        description: "Consente di definire un titolo accattivante e informativo per la social card. Se il campo è vuoto, verrà utilizzato il valore di `Meta title`."
                    }),
                    description: fields.text({
                        label: "Descrizione della card",
                        description: "Fornisci ua breve e coinvolgente descrizione quando il contenuto viene condiviso sulle piattaforme social. Se il campo è vuoto, verrà utilizzato il valore di `Meta description`.",
                        multiline: true,
                    })
                }, {
                    label: "Social Card",
                    description: "Contente di personalizzare l'aspetto visivo dei tuoi contenuti quando vengono condivisi su piattaforme di social media, quali Facebook, X (Twitter) o LinkedIn."
                }),
                codeInjection: fields.object({
                    pageHeader: fields.text({
                        label: "Intestazione della pagina",
                        description: "Permette di integrare script personalizzati, stili e altre personalizzazioni tecniche direttamente nel tag `<head>` della pagina.",
                        multiline: true
                    }),
                    pageFooter: fields.text({
                        label: "Piede della pagina",
                        description: "Permette di integrare script personalizzati direttamente come ultimo elemento del tag `<body>` della pagina.",
                        multiline: true
                    })
                }, {
                    label: "Iniezione di codice",
                    description: "Consente di incorporare e personalizzare elementi dinamici aggiungendo codice personalizzato alla pagina."
                })
            },
        })
    }
}