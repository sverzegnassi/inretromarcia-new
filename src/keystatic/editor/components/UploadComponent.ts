import { component, fields } from "@keystatic/core";
import { fileIcon } from '@keystar/ui/icon/icons/fileIcon';
import { filePlus2Icon } from '@keystar/ui/icon/icons/filePlus2Icon';
import React from "react";
import { KeystarIcon, LabelWithCaption, LayoutH } from "./ui-common";
import { css, tokenSchema } from '@keystar/ui/style';

export default () => {
    return component({
        preview: ({ fields }) => {
            if (fields.ref.value) {
                return LayoutH([
                    KeystarIcon(fileIcon),
                    LabelWithCaption({
                        label: fields.ref.value,
                        caption: "Percorso della risorsa selezionata"
                    })
                ]);
            }

            return LayoutH([
                KeystarIcon(filePlus2Icon),
                React.createElement('span', {
                    className: css({
                        color: tokenSchema.color.foreground.neutralSecondary
                    })
                }, "Seleziona un file da incorporare...")
            ]);
        },
        label: "File",
        schema: {
            ref: fields.relationship({
                label: "Percorso della risorsa selezionata",
                collection: "uploads"
            })
        },
    })
}