import { fields, singleton } from '@keystatic/core';

export default singleton({
    label: 'Configurazione Sito Web',
    path: 'src/data/website-config',
    format: { data: "json" },
    schema: {
        general: fields.object({
            titleShort: fields.text({
                label: "Titolo per il sito web (Breve)",
                description: "Il nome del sito web. Viene utilizzato come tag `meta` nelle sottopagine."
            }),
            titleLong: fields.text({
                label: "Titolo per il sito web (Completo)",
                description: "Il nome del sito web, con una tagline. Viene utilizzato come tag `meta` per la pagina iniziale."
            }),
            description: fields.text({
                label: "Meta description predefinita",
                description: "Verrà utilizzata qualora la pagina non specifichi una propria descrizione."
            }),
            titleDelimiter: fields.text({
                label: "Delimitatore del titolo",
                description:
                  "Consente di impostare il carattere delimitatore tra il titolo della pagina e il titolo del sito nella tag <title> della pagina, visibile nelle schede del browser.",
                defaultValue: "|",
              }),
            lang: fields.text({
                label: "Lingua predefinita",
                description: "Il codice ISO 639-1 per la lingua predefinita del sito (ad esempio `it`).",
            }),
            siteUrl: fields.url({
                label: "URL del sito",
                description: "L'URL assoluto (protocollo, host, percorso - senza barra finale) del tuo sito pubblicato (ad esempio `https://www.example.org`)."
            })
        }, {
            label: "Generale",
            description: "Configurazione generale per il sito web"
        }),
        searchEngines: fields.object({
            robots: fields.text({
                label: "robot.txt",
                description: "Specifica il contenuto del file `robot.txt` che influisce sui motori di ricerca e crawler.",
                multiline: true,
            }),
        }, {
            label: "Motori di ricerca e Crawler",
            description: "Configurazione relativa ai motori di ricerca e ai crawler del sito."
        }),
        rss: fields.object({
            enabled: fields.checkbox({
                label: "Abilita feed RSS",
                description: "Abilita o disabilita il feed RSS del sito.",
                defaultValue: true,
            })
        }, {
            label: "Feed RSS",
            description: "Configurazione del feed RSS del sito"
        }),
        sitemap: fields.object({
            exclude: fields.array(
                fields.url({
                    label: "Slug or URL of the page to exclude",
                    validation: {
                        isRequired: true
                    }
                }), {
                    label: "Pagine da escludere",
                    itemLabel: props => props.value ?? "Valore non valido"
                }
            ),
            include: fields.array(
                fields.url({
                    label: "Slug or URL of the page to include",
                    validation: {
                        isRequired: true
                    }
                }),
                {
                    label: "Pagine da includere",
                    itemLabel: props => props.value ?? "Valore non valido"
                }
            ),
        }, {
            label: "Sitemap XML",
            description: "Personalizza le impostazioni per la generazione del file XML contenente informazioni strutturate sulle pagine del sito, facilitando l'indicizzazione da parte dei motori di ricerca."
        }),
        socials: fields.object({
            facebook: fields.url({
                label: "URL della pagina Facebook"
            }),
            x: fields.url({
                label: "URL del profilo X (precedentemente Twitter)"
            })
        })
    }
});