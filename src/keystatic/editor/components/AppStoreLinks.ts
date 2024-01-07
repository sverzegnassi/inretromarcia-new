import { NotEditable, component, fields } from "@keystatic/core";
import { LabelWithCaption, LayoutV, LayoutH } from "./ui-common";
import React from "react";

export default () => {
    return component({
        preview: ({ fields }) => {
            if (!fields.name.value) {
                return React.createElement(NotEditable, null, "Specifica il nome dell'applicazione")
            }

            return LayoutV([
                React.createElement('span', null, fields.name.value),
                LayoutH([
                    LabelWithCaption({
                        label: fields.googlePlay.value ? "Presente" : "Non presente",
                        labelColor: fields.googlePlay.value ? "neutral" : "neutralSecondary",
                        caption: "Google Play"
                    }),
                    LabelWithCaption({
                        label: fields.apple.value ? "Presente" : "Non presente",
                        labelColor: fields.googlePlay.value ? "neutral" : "neutralSecondary",
                        caption: "App Store (Apple)"
                    })
                ])
            ]);
        },
        label: "Collegamenti App Store",
        schema: {
            name: fields.text({
                label: "Nome dell'applicazione"
            }),
            googlePlay: fields.url({
                label: "Google Play Store",
                description: "Il link diretto (URL) all'applicazione su Google Play Store."
            }),
            apple: fields.url({
                label: "App Store (Apple)",
                description: "Il link diretto (URL) all'applicazione su (Apple) App Store."
            })
        }
    })
}