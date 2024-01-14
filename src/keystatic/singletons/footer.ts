import { fields, singleton } from '@keystatic/core';
import { basicEditor } from '../editor';

export default singleton({
    label: 'Piè di pagina',
    path: 'src/data/footer',
    format: { contentField: "footer" },
    schema: {
        footer: basicEditor({
            label: "Contenuto",
            description: "Il testo da visualizzare a piè di pagina",
        }),
        links: fields.array(
            fields.object({
                name: fields.text({
                    label: "Etichetta / Titolo del collegamento"
                }),
                color: fields.select({
                    label: "Stile del pulsante",
                    options: [
                        { label: "Primario", value: "primary" },
                        { label: "Secondario", value: "secondary" },
                    ],
                    defaultValue: "primary",
                }),
                link: fields.conditional(
                    fields.select({
                        label: "Tipo di link",
                        options: [
                            { label: "Link interno", value: "internal" },
                            { label: "Link esterno", value: "external" },
                            { label: "Email", value: "email" }
                        ],
                        defaultValue: "external"
                    }),
                    {
                        internal: fields.pathReference({
                            label: "Seleziona una pagina di destinazione",
                            validation: {
                                isRequired: true
                            },
                            pattern: "src/data/content/**/*.mdoc"
                        }),
                        external: fields.object({
                            url: fields.url({
                                label: "Destinazione",
                                validation: {
                                    isRequired: true
                                }
                            }),
                            nofollow: fields.checkbox({
                                label: "Applica direttiva `nofollow`",
                                defaultValue: true
                            }),
                            "_blank": fields.checkbox({
                                label: "Apri in una nuova finestra",
                                defaultValue: true
                            }),
                        }),
                        email: fields.text({
                            label: "Indirizzo email",
                            validation: {
                                length: { min: 1 }
                            }
                        })
                    }
                )
            }),
            {
                label: "Collegamenti",
                description: "Fornisce una lista di collegamenti da visualizzare a pie di pagina.",
                itemLabel: (props) => props.fields.name.value
            }
        )
    }
});