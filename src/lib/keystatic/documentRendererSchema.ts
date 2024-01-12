import _ from "lodash";

type BlockRendererSchema = {
    component: (props: Record<string, any>) => string;
    props: (props: Record<string, any>) => Record<string, any>;
};

const inlineNodes = {
    bold: "strong",
    italic: "em",
    underline: "u",
    strikethrough: "s",
    code: "code",
    superscript: "sup",
    subscript: "sub",
    keyboard: "kbd",
};

const blockNodes: Record<string, BlockRendererSchema> = {
    "block": {
        component: () => "div",
        props: () => ({}),
    },

    "blockquote": {
        component: () => "blockquote",
        props: () => ({}),
    },

    "divider": {
        component: () => "hr",
        props: () => ({}),
    },

    "heading": {
        component: (props) => `h${props.level}`,
        props: (props) => ({
            style: props.textAlign && `text-align: ${props.textAlign};`,
            id: _.kebabCase(props.innerText.join(' '))
        }),
    },

    "image": {
        component: () => "img",
        props: (props) => ({
            loading: "lazy",
            src: props.src,
            alt: props.alt,
            title: props.title,
        }),
    },

    "layout": {
        component: () => "div",
        props: (props) => ({
            style: `display: grid; grid-template-columns: ${props.layout.map((col: number) => `${col}fr`).join(" ")};`,
        }),
    },

    "layout-area": {
        component: () => "div",
        props: () => ({}),
    },

    "link": {
        component: () => "a",
        props: (props) => ({
            href: props.href,
        }),
    },

    "list-item": {
        component: () => "li",
        props: () => ({}),
    },

    "list-item-content": {
        component: () => "span",
        props: () => ({}),
    },

    "ordered-list": {
        component: () => "ol",
        props: () => ({}),
    },

    "paragraph": {
        component: () => "p",
        props: (props) => ({
            style: props.textAlign && `text-align: ${props.textAlign};`,
        }),
    },

    "table": {
        component: () => "table",
        props: () => ({}),
    },

    "table-body": {
        component: () => "tbody",
        props: () => ({}),
    },

    "table-cell": {
        component: (props) => (props.header ? "th" : "td"),
        props: () => ({}),
    },

    "table-head": {
        component: () => "thead",
        props: () => ({}),
    },

    "table-row": {
        component: () => "tr",
        props: () => ({}),
    },

    "unordered-list": {
        component: () => "ul",
        props: () => ({}),
    },
};

export default {
    inline: inlineNodes,
    block: blockNodes,
}