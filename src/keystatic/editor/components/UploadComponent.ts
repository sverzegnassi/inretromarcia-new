import { component, fields } from "@keystatic/core";
import { fileIcon } from '@keystar/ui/icon/icons/fileIcon';
import { filePlus2Icon } from '@keystar/ui/icon/icons/filePlus2Icon';
import React from "react";
import { KeystarIcon, LabelWithCaption, LayoutH } from "./ui-common";


export default () => {
    return component({
        preview: ({ fields }) => {
            if (fields.ref.value) {
                return LayoutH([
                    KeystarIcon(fileIcon),
                    LabelWithCaption(fields.ref.value, "Percorso della risorsa selezionata")
                ]);
            }

            return LayoutH([
                KeystarIcon(filePlus2Icon),
                React.createElement('span', null, "Seleziona un file da incorporare...")
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