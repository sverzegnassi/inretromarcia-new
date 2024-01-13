import { NotEditable, component, fields } from "@keystatic/core";
import { Label, LabelWithCaption } from "./ui-common";
import React from "react";

export default () => {
    return component({
        preview: ({ fields }) => {
            if (!fields.ref.value) {
                return React.createElement(NotEditable, null,
                    Label({
                        text: "Specifica il percorso dell'articolo in evidenza",
                        textColor: "caution"
                    })
                );
            }

            return LabelWithCaption({
                text: fields.ref.value,
                textColor: "neutral",
                caption: "Articolo attualmente selezionato"
            })
        },
        label: "[Pattern] Articolo in evidenza",
        schema: {
            ref: fields.pathReference({
                label: "Seleziona un articolo",
                pattern: "src/content/**/*.mdoc"
            }),
        }
    })
}