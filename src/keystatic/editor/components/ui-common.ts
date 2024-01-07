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

export type LabelProps = {
    text: string,
    textColor?:
    | "neutral"
    | "neutralEmphasis"
    | "neutralSecondary"
    | "neutralTertiary"
    | "onEmphasis"
    | "inverse"
    | "inverseSecondary"
    | "accent"
    | "positive"
    | "caution"
    | "critical"
    | "pending"
    | "highlight"
}

export const Label = ({ text, textColor = "neutral" }: LabelProps) => {
    return React.createElement('span', {
        className: css({
            color: tokenSchema.color.foreground[textColor],
        })
    }, text);
}

export type LabelWithCaptionProps = LabelProps & {
    caption: string,
}

export const LabelWithCaption = ({ text, caption, textColor = "neutral" }: LabelWithCaptionProps) => {
    return React.createElement(NotEditable, {
        className: css({
            display: 'flex',
            flexDirection: 'column',
            rowGap: tokenSchema.size.space.xsmall,
        })
    },
        React.createElement('span', {
            className: css({
                fontSize: tokenSchema.typography.text.small.size,
                color: tokenSchema.color.foreground.neutralSecondary
            })
        }, caption),
        Label({ text, textColor })
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
