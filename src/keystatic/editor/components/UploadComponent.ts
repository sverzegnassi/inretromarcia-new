import { NotEditable, component, fields } from "@keystatic/core";
import { fileIcon } from '@keystar/ui/icon/icons/fileIcon';
import { filePlus2Icon } from '@keystar/ui/icon/icons/filePlus2Icon';
import { css, tokenSchema } from '@keystar/ui/style';
import React, { type ReactElement } from "react";

function KeystarIcon(icon: ReactElement) {
    return React.cloneElement(icon, {
        className: css({
            width: tokenSchema.size.icon.large,
            height: tokenSchema.size.icon.large,
            fill: "transparent",
            stroke: tokenSchema.color.foreground.neutral,
        })
    })
}

function Layout(children: ReactElement[]) {
    return React.createElement(NotEditable, {
        className: css({
            display: 'flex',
            alignItems: 'center',
            columnGap: tokenSchema.size.space.medium
        })
    }, children);
}

function LabelWithCaption(label: string, caption: string) {
    return React.createElement('div', {
        className: css({
            display: 'flex',
            flexDirection: 'column',
            rowGap: tokenSchema.size.space.xsmall,
        })
    }, [
        React.createElement('span', {
            className: css({
                fontSize: tokenSchema.typography.text.small.size,
                color: tokenSchema.color.foreground.neutralSecondary
            })
        }, caption)
    ],
        React.createElement('span', null, label)
    )
}

export default () => {
    return component({
        preview: ({ fields }) => {
            if (fields.ref.value) {
                return Layout([
                    KeystarIcon(fileIcon),
                    LabelWithCaption(fields.ref.value, "Percorso della risorsa selezionata")
                ]);
            }

            return Layout([
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