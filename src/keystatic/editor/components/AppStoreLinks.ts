import { NotEditable, component, fields } from "@keystatic/core";
import { Label, LabelWithCaption, LayoutV, LayoutH } from "./ui-common";
import React from "react";

export default () => {
    return component({
        preview: ({ fields }) => {
            if (!fields.name.value) {
                return React.createElement(NotEditable, null,
                    Label({
                        text: "Specifica il nome dell'applicazione",
                        textColor: "caution"
                    })
                );
            }

            return LayoutV([
                Label({
                    text: fields.name.value,
                    textColor: "neutralEmphasis"
                }),
                LayoutH([
                    LabelWithCaption({
                        text: fields.googlePlay.value ? "Presente" : "Non presente",
                        textColor: fields.googlePlay.value ? "neutral" : "neutralSecondary",
                        caption: "Google Play"
                    }),
                    LabelWithCaption({
                        text: fields.apple.value ? "Presente" : "Non presente",
                        textColor: fields.apple.value ? "neutral" : "neutralSecondary",
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