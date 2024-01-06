import { NotEditable, component, fields } from "@keystatic/core";
import React from "react";

type Props = {
    label: string,
}

export default (props: Props) => {


    return {
        ...fields.document({
            ...props,

            dividers: true,
            links: true,

            /*
                Use `astro:assets` for handling images.
            */
            images: {
                directory: 'src/assets/uploads/',
                /*
                    Unfortunately, Keystatic:
                        
                        - doesn't allow referencing any Assets collection (see e.g., https://payloadcms.com/docs/upload/overview#uploads)
                        - doesn't allow specifying custom fields in the schema.
                        
                    By different means, these features would have helped in centralizing assets management,
                    maintaining a clear record of attributions, and managing assets licenses.
                */
                schema: {
                    title: fields.text({
                        label: 'Titolo / Didascalia',
                        description: "Assegna un titolo significativo o una didascalia descrittiva ai tuoi elementi multimediali come immagini o video.",
                    }),
                    alt: fields.text({
                        label: "Testo alternativo (Alt text)",
                        description: "Fornisce una descrizione testuale breve e significativa per le immagini presenti sul sito. Questo testo viene utilizzato dai lettori di schermo e dai motori di ricerca per comprender e interpretare il contenuto visivo. L'utilizzo del testo alternativo migliora l'accessibilità del sito e favorisce una migliore indicizzazione da parte dei motori di ricerca."
                    }),
                },
            },

            /*
                `layouts` is a built-in shortcode that allows to specify columns inside a MarkDoc document.
        
                Its output looks like:
                    ```
                    {% layout layout=[1, 1] %}
                    {% layout-area %}
                    Content column #1
                    {% /layout-area %}
        
                    {% layout-area %}
                    Content column #2
                    {% /layout-area %}
                    {% /layout %}
                    ```
        
                The SSG (e.g. Astro) can take from there and render its content through nested components.
        
                I can see the appeal for this, but let's keep it disabled for now.
            */
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

                /*
                    Disable alignment options.
                    Not required in a blog type of website.
        
                    Only legal value is `true` to activate the functionality.
                    If left out, it won't be activated. 
                */
                /*
                  alignment: {
                    center: true,
                    end: true,
                },
                */

                /*
                    Disable level 5 and 6 headings.
                    Self-explanatory.
                */
                headingLevels: [1, 2, 3, 4 /*, 5, 6*/],
                blockTypes: {
                    blockquote: true,
                    code: true,
                },
                softBreaks: true,
            },

            componentBlocks: {
                asset: component({
                    preview: ({ fields }) => {
                        return React.createElement('img', { src: `/uploads/${fields.ref.value}/file.jpg` }, null);
                      },
                    label: "Asset",
                    schema: {
                        ref: fields.relationship({
                            label: "Percorso risorsa",
                            collection: "assets"
                        })
                    }
                })
            }
        })
    }
}