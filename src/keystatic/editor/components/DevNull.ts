import { NotEditable, component, fields } from "@keystatic/core";
import { Label } from "./ui-common";
import { css, tokenSchema } from '@keystar/ui/style';
import React from "react";

export default () => {
    return component({
        preview: ({ fields }) => {
            if (!fields.content.value) {
                return React.createElement(NotEditable, null,
                    Label({
                        text: "Aggiungi una nota di sviluppo. Non verrà visualizzata nel contenuto del sito web.",
                        textColor: "neutralSecondary"
                    })
                );
            }

            return React.createElement(NotEditable, {
                className: css({
                    backgroundColor: tokenSchema.color.background.pending,
                    fontStyle: "italic"
                })
            },
                Label({
                    text: fields.content.value,
                    textColor: "neutralSecondary"
                })
            );
        },
        label: "Nota di sviluppo",
        schema: {
            content: fields.text({
                label: "Nota",
                multiline: true
            })
        }
    })
}