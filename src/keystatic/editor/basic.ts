import { fields } from "@keystatic/core";
import DevNull from "./components/DevNull";

type Props = {
    label: string,
    description?: string,
}

// A simple Rich Text editor, providing support
// for rich text within "layout" blocks, such as
// Hero, two columns layouts, footer, etc.

/*
    e.g. Hero block component
    {
        content: basicEditor({ ... }),
        featuredImage: fields.image({ ... }),
        callToAction: fields.object({ ... })
    }

    e.g. Two columns layout component
    {
        columnLeft: fields.blocks({
            contentBlock: basicEditor({ ... })
            mediaBlock: fields.image({ ... })
            pricingBlock: fields.object({ ... })
        }),
        columnRight: ...
    }

    e.g. Footer configuration
    {
        content: basicEditor({ ... }),
        links: fields.array({ ... })
    }
*/

export default (props: Props) => {
    return {
        ...fields.document({
            ...props,

            dividers: true,
            links: true,

            /* images: false, */
            
            /*layouts: [[1], [1, 1]],*/

            formatting: {
                inlineMarks: {
                    bold: true,
                    italic: true,
                    underline: true,
                    strikethrough: true,
                    code: true,
                    superscript: true,
                    subscript: true,
                    keyboard: true,
                },
                
                listTypes: {
                    ordered: true,
                    unordered: true,
                },

                alignment: {
                    center: true,
                    end: true,
                },

                headingLevels: [1, 2, 3, 4 /*, 5, 6*/],
                blockTypes: {
                    blockquote: true,
                    /* code: false, */
                },

                /* softBreaks: false, */
            },

            tables: true,

            componentBlocks: {
                devNull: DevNull(),
            }
        })
    }
}