import { fields, singleton } from '@keystatic/core';
import { countryCodes } from '../../lib/countryCodes_ISO3166-1_it';

export default singleton({
    label: 'Organizzazione (Schema.org)',
    path: 'src/data/organization',
    format: { data: "json" },
    schema: {
        general: fields.object({
            "@type": fields.select({
                label: "Tipo di organizzazione",
                options: [
                    { label: "Organizzazione (generico)", value: "Organization" },
                    { label: "Azienda / Attività locale", value: "LocalBusiness" },
                    { label: "Consorzio", value: "Consortium" },
                    { label: "Società per azioni", value: "Corporation" },
                    { label: "Ente educativo", value: "EducationalOrganization" },
                    { label: "Organizzazione governativa", value: "GovernmentOrganization" },
                    { label: "Sistema bibliotecario", value: "LibrarySystem" },
                    { label: "Organizzazione medica", value: "MedicalOrganization" },
                    { label: "Organizzazione non-governativa (ONG)", value: "NGO" },
                    { label: "News / Media", value: "NewsMediaOrganization" },
                    { label: "Attività online", value: "OnlineBusiness" },
                    { label: "Gruppo di artisti", value: "PerformingGroup" },
                    { label: "Partito politico", value: "PoliticalParty" },
                    { label: "Organizzazione di ricerca", value: "ResearchOrganization" },
                    { label: "Organizzazione sportiva", value: "SportsOrganization" },
                ],
                defaultValue: "Organization"
            }),
            name: fields.text({
                label: "Nome dell'organizzazione",
                description: "Utilizza lo stesso nome che usi per il sito."
            }),
            alternateName: fields.text({
                label: "Nome alternativo",
                description: "Un altro nome comune utilizzato dalla tua organizzazione, se applicabile. È diverso dalla denominazione legale."
            }),
            legalName: fields.text({
                label: "Denominazione legale",
                description: "Il nome legale registrato della tua organizatione, se applicabile e diverso dalle denominazioni precedenti."
            }),
            description: fields.text({
                label: "Descrizione dell'organizzazione",
                description: "Una descrizione dettagliata dell'organizzazione, se applicabile.",
                multiline: true,
            }),
            logo: fields.image({
                label: "Logo dell'organizzazione",

                // TODO: It'd be nice if description would support multiline text and anchors.
                // Ref. https://developers.google.com/search/docs/appearance/google-images?hl=it#supported-image-formats
                description: `
                L'aggiunta di questa proprietà può aiutare Google a comprendere meglio quale logo vuoi mostrare, ad esempio nei risultati della Ricerca e nelle schede informative.
                
                Linee guida per le immagini:
                    1) L'immagine deve essere almeno 112 x 112 px.
                    2) Il formato file immagine deve essere supportato da Google Immagini (formati: BMP, GIF, JPEG, PNG, WebP e SVG).
                    4) Assicurati che l'immagine abbia l'aspetto previsto su uno sfondo solo bianco (ad esempio, se il logo è principalmente bianco o grigio, potrebbe non avere l'aspetto desiderato quando mostrato su uno sfondo bianco).        
            `,
                directory: 'public/schemaOrg',
                publicPath: '/schemaOrg/'
            }),
        }, {
            label: "Informazioni generali",
            layout: [12, 12, 6, 6, 12, 12]
        }),
        address: fields.array(
            fields.object({
                streetAddress: fields.text({
                    label: "Indirizzo",
                    description: "L'indirizzo completo del tuo indirizzo postale (ad esempio `Via degli esempi, 123`)"
                }),
                addressLocality: fields.text({
                    label: "Città",
                    description: "La città del tuo indirizzo postale (ad esempio `Desenzano del Garda`)"
                }),
                addressRegion: fields.text({
                    label: "Area amministrativa / Provincia",
                    description: "L'area amministrativa del tuo indirizzo postale, se applicabile. In Italia, corrisponde alla provincia (ad esempio `BS`)."
                }),
                postalCode: fields.text({
                    label: "Codice postale",
                    description: "Il codice postale del tuo indizzo."
                }),
                addressCountry: fields.select({
                    label: "Paese",
                    options: countryCodes.map(country => ({ label: country.name, value: country.alpha2 })),
                    defaultValue: "IT"
                })
            }),
            {
                label: "Sedi fisiche",
                description: "L'indirizzo (fisico o postale) della tua organizzazione, se ne hai uno. Includi tutte le proprietà applicabili al tuo paese; più ne fornisci, migliore sarà la qualità del risultato per gli utenti. Puoi fornire più indirizzi se la tua sede si trova in più città, stati o paesi. Richiesto per le organizzazioni del tipo `LocalBusiness` o uno dei suoi sottotipi.",
                itemLabel: (props) => `${props.fields.streetAddress.value} ${props.fields.addressLocality.value} ${props.fields.addressRegion.value} ${props.fields.postalCode.value} ${props.fields.addressCountry.value}`
            }
        ),
        onlinePresence: fields.object({
            url: fields.url({
                label: "URL dell'organizzazione",
                description: "L'URL del sito web della tua organizzazione. Da specificare ESCLUSIVAMENTE nel caso differisca dall'URL di questo sito."
            }),
            sameAs: fields.array(
                fields.url({
                    label: "Collegamento o URL alla risorsa esterna",
                    validation: {
                        isRequired: true
                    }
                }),
                {
                    label: "Siti collegati / Pagine correlate",
                    description: "Elenco di collegamenti o URL che conducono a pagine esterne contenenti informazioni aggiuntive sulla tua organizzazione. Ad esempio, un URL che rimanda alla pagina del profilo della tua organizzazione su un social media o un sito di recensioni.",
                    itemLabel: props => props.value as string
                }
            ),
        }, {
            label: "Presenza online",
        }),

        contacts: fields.object({
            telephone: fields.text({
                label: "Numero di telefono",
                description: "Un numero di telefono dell'attività destinato a essere il metodo di contatto principale per i clienti. Assicurati di includere il codice paese e il prefisso."
            }),
            email: fields.text({
                label: "Indirizzo email",
                description: "L'indirizzo email per contattare la tua attività, se applicabile."
            }),
        }, {
            label: "Contatti",
            layout: [6, 6]
        }),

        taxInformation: fields.object({
            vatId: fields.text({
                label: "Partita IVA",
                description: "Il codice di partita IVA associato alla tua organizatione, se applicabile al tuo paese e alla tua attività."
            }),
            taxId: fields.text({
                label: "ID fiscale",
                description: "L'ID fiscale associato alla tua organizatione, se applicabile. Assicurati che corrisponda al paese che hai specificato nel campo `Indirizzo`."
            })
        }, {
            label: "Informazioni fiscali",
            description: "Includere le informazioni fiscali può essere utile per migliorare la visibilità online e fornire un importante indicatore di fiducia per gli utenti (ad esempio, possono cercare la tua attività nei registri pubblici per partite IVA).",
            layout: [6, 6]
        })
    }
});