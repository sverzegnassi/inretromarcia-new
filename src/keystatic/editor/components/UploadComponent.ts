import { component, fields } from "@keystatic/core";
import { fileIcon } from '@keystar/ui/icon/icons/fileIcon';
import { filePlus2Icon } from '@keystar/ui/icon/icons/filePlus2Icon';
import { KeystarIcon, Label, LabelWithCaption, LayoutH } from "./ui-common";

export default () => {
    return component({
        preview: ({ fields }) => {
            if (fields.ref.value) {
                return LayoutH([
                    KeystarIcon(fileIcon),
                    LabelWithCaption({
                        text: fields.ref.value,
                        caption: "Percorso della risorsa selezionata"
                    })
                ]);
            }

            return LayoutH([
                KeystarIcon(filePlus2Icon),
                Label({
                    text: "Seleziona un file da incorporare...",
                    textColor: "neutralSecondary"
                })
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