import { fields, singleton } from '@keystatic/core';

export default singleton({
    label: 'Reindirizzamenti',
    path: 'src/data/redirects',
    format: { data: "json" },
    schema: {
        redirects: fields.array(
            fields.object({
                source: fields.url({
                    label: "Percorso del file di origine"
                }),
                destination: fields.url({
                    label: "Percorso del file di destinazione o link esterno"
                }),
                code: fields.select({
                    label: "HTML Code",
                    options: [
                        { label: "Predefinito", value: "" },
                        { label: "301 Moved Permanently", value: "301" },
                        { label: "302 Moved Temporarily", value: "302" },
                        { label: "303 See Other", value: "303" },
                        { label: "307 Temporary Redirect", value: "307" },
                        { label: "308 Permanent Redirect", value: "308" },
                        { label: "404 Not Found", value: "404" },
                    ],
                    defaultValue: "",
                })
            }), {
            label: "Reindirizzamenti attivi",
            itemLabel: (props) => {
                if (!props.fields) {
                    return "Specificare una nuova regola."
                }

                if (!props.fields.source.value || !props.fields.destination.value) {
                    return "ERRORE: La regola non è completa. Si prega di aggiornare la regola."
                }

                return `[${props.fields.code.value || "Predefinito"}] Da \`${props.fields.source.value}\` a \`${props.fields.destination.value}\``
            }
        })
    }
});