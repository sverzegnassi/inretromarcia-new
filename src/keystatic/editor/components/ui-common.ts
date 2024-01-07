import { NotEditable } from "@keystatic/core";
import { css, tokenSchema } from '@keystar/ui/style';
import React, { type ReactElement } from "react";

export const LayoutH = (children: ReactElement[]) => {
    return React.createElement(NotEditable, {
        className: css({
            display: 'flex',
            alignItems: 'center',
            columnGap: tokenSchema.size.space.medium
        })
    }, children);
}

export const LayoutV = (children: ReactElement[]) => {
    return React.createElement(NotEditable, {
        className: css({
            display: 'flex',
            flexDirection: 'column',
            rowGap: tokenSchema.size.space.medium
        })
    }, children);
}

export const LabelWithCaption = (label: string, caption: string) => {
    return React.createElement(NotEditable, {
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

export const KeystarIcon = (icon: ReactElement) => {
    return React.cloneElement(icon, {
        className: css({
            width: tokenSchema.size.icon.large,
            height: tokenSchema.size.icon.large,
            fill: "transparent",
            stroke: tokenSchema.color.foreground.neutral,
        })
    })
}
