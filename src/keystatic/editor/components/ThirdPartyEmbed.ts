import { NotEditable, component, fields, type BasicFormField } from "@keystatic/core";
import React from "react";
import { Label, LabelWithCaption } from "./ui-common";
import { YoutubePreview } from "./ui/YoutubePreview";

type SelectFormField = BasicFormField<string> & {
    options: readonly {
        label: string;
        value: string;
    }[];
}

function getSelectFieldLabel(select: SelectFormField, value: string) {
    return select.options.find((el) => el.value === value)?.label ?? "undefined"
}

export default () => {
    return component({
        preview: ({ fields }) => {
            if (!fields.service.discriminant || fields.service.discriminant === "none") {
                return React.createElement(NotEditable, null,
                    Label({
                        text: "Specifica il contenuto da incorporare...",
                        textColor: "neutralSecondary"
                    })
                );
            }

            if (!fields.service.value.value) {
                return LabelWithCaption({
                    text: "Configura le impostazioni di incorporamento...",
                    textColor: "caution",
                    caption: getSelectFieldLabel(fields.service.schema.discriminant, fields.service.discriminant)
                })
            }

            if (fields.service.discriminant === "youtube") {
                return React.createElement(YoutubePreview, { youtubeVideoUrl: fields.service.value.value }, null)
            }

            if (fields.service.discriminant === "x") {
                // Setting up a proxy to avoid CORS issues when fetching `https://publish.twitter.com/` seems a bit excessive.
                // Instead, directly return the 𝕏 post URL.
                return LabelWithCaption({
                    text: fields.service.value.value,
                    textColor: "neutralEmphasis",
                    caption: "Post di 𝕏 (prec. Twitter)"
                })
            }

            return LabelWithCaption({
                text: "Configurato",
                textColor: "neutralEmphasis",
                caption: getSelectFieldLabel(fields.service.schema.discriminant, fields.service.discriminant)
            })
        },
        label: "Incorpora contenuto di terze parti",
        schema: {
            service: fields.conditional(
                fields.select({
                    label: "Piattaforma",
                    description: "Seleziona la piattaforma di terze parti da cui incorporare il contenuto. La tua selezione potrebbe influire sulla gestione dei dati personali in conformità con il GDPR (Regolamento Generale sulla Protezione dei Dati). Assicurati di rispettare le normativa sulla privacy durante l'incorporazione del contenuto.",
                    options: [
                        { label: "Seleziona un valore", value: 'none' },
                        { label: "HTML", value: 'html' },
                        { label: "Instagram", value: 'instagram' },
                        { label: "Youtube", value: 'youtube' },
                        { label: "X (prec. Twitter)", value: 'x' },
                        { label: "Tiktok", value: 'tiktok' }
                    ],
                    defaultValue: "none"
                }), {
                none: fields.empty(),
                html: fields.text({
                    label: "Codice da incorporare",
                    multiline: true,
                }),
                instagram: fields.text({
                    label: "Codice da incorporare",
                    multiline: true,
                }),
                youtube: fields.url({
                    label: "URL del video",
                }),
                x: fields.url({
                    label: "URL del post",
                }),
                tiktok: fields.url({
                    label: "URL del post",
                })
            }
            )
        }
    })
}