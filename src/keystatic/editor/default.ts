import { fields } from "@keystatic/core";
import ImageComponent from "./components/ImageComponent";
import UploadComponent from "./components/UploadComponent";
import AppStoreLinks from "./components/AppStoreLinks";
import ThirdPartyEmbed from "./components/ThirdPartyEmbed";
import DevNull from "./components/DevNull";
import Directions from "./components/Directions";

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
                `astro:assets` is used for handling images.

                Unfortunately, there is no way to create an Assets collection like in PayloadCMS yet.
                (ref. https://payloadcms.com/docs/upload/overview#uploads)
                
                While `fields.relationship()` is a good step in the right direction, the preview customization
                of a `componentBlock` is still incomplete (Keystatic is still in alpha, after all).

                Even if React can be used to create custom components, there is no API or built-in functionality in Keystatic
                to reliably fetch the referenced media file when using 'GitHub' storage.

                This means there's no reliable way to provide an image preview.

                The Reader API is not useful in this context, despite having successfully retrieved the information. Its usage
                in this context would be static, i.e., the content of an "Assets" collection would be hard-coded at build time.
                As a result, the image would not be available until the website is built and deployed after an update.

                The beauty of going full-static, without a database — I would say.


                Possible solutions:
                    1. Just use the default `fields.document()` image handler — the one below.
                        There are two downsides to this approach:
                            - Custom fields can't be added. Although `Caption` and `Alt text` are provided by default,
                                I wish I could add extra fields to handle proper attribution of images
                                (e.g., "source," "author," and "license").

                            - Asset management can't be centralized.
                                This means that even if I could add those extra fields mentioned above, there is
                                no trivial way to retrieve such information across the whole website/CMS.

                                A bit of context on why this matters:

                                For this website, I mainly use images available on Unsplash. The license for these
                                images grants "an irrevocable, nonexclusive, worldwide copyright license to download,
                                copy, modify, distribute, perform, and use photos from Unsplash for free,
                                including for commercial purposes, without permission from or
                                attributing the photographer or Unsplash."

                                This means I am in the clear. End of the story? No.
                                
                                What I didn't expect while building this website is that it would resonate all the way
                                to South Korea. One of the Unsplash photographers from South Korea mentioned my website
                                on his Naver blog, gifting me with a backlink - something both Google and I appreciate.

                                Although I have no legal obligation, receiving a backlink from South Korea
                                is extremely valuable for this website. Therefore, it makes sense to express
                                my gratitude by adding an attribution page on the website.

                                Since these photographers use Unsplash to promote themselves and gain visibility,
                                even if my contribution is minor, it's still difficult for me to skip on this opportunity.


                    2. Implementing a custom MarkDoc `componentBlock` is achievable using `fields.image()`.

                        GOOD:
                            - Custom fields can be added.
                            - `fields.image()` returns a `value.data` property representing the image.
                                The image preview can be easily provided by adding just four lines of code.

                                ```javascript
                                component({
                                    preview: ({ fields }) => {
                                        const imgData = fields.image.value ? fields.image.value.data : "";
                                        const objectURL = URL.createObjectURL(new Blob([imgData]));
                                        return React.createElement('img', { src: objectURL }, null);
                                    },
                                })
                                ```

                        BAD:
                            - Images are stored in `<field-image--directory>/<entry-slug>`, as the "componentBlock"
                                operates within the editor's context. This may lead to image duplication,
                                although it's a minor inconvenience.

                            - There is no straightforward way to process them in a centralized manner.
                                The information from the custom fields is stored inside the MarkDoc file,
                                not in a separate .json/.yaml file, which would make it easier to search
                                across the entire source code.

                    3. Keystatic decides to introduce a hook in `fields.relationship()` that allows for retrieving and manipulating values stored inside the referenced collection entry.

                        Example:

                        ```javascript
                        asset: component({
                            preview: (props) => {
                                const imgData = props.retrieveData;
                            
                                const objectURL = URL.createObjectURL(new Blob([imgData]));
                                return React.createElement('img', { src: objectURL }, null);
                            },
                            label: "Image",
                            schema: {
                                ref: fields.relationship({
                                    label: "Resource Path",
                                    collection: 'assets'
                                }, {
                                    // By default, `fields.relationship()` only returns the referenced
                                    // collection entry's value (i.e., the slug) - accessible via `props.fields.ref.value`.

                                    // A direct way to access the collection entry stored value could be added
                                    // (through a `source` or `entryProps` property: e.g., `props.fields.ref.source.fields.image.value.data`)

                                    // Alternatively, Keystatic could provide a hook for convenience, here called `retrieveData`
                                    retrieveData: ({ fields }) => fields.image.value.data
                                })
                            }
                        })
                        ```

                        However, it's worth noting that the form component used for selecting related
                        entries might not be suitable for images.

                        It currently uses a simple `<select>` that displays the collection entry `slug`.
                
                Given the current state, solution #2 is the winner. Consequently, the editor's built-in `images` support is now disabled.
            */
            /*images: false,*/

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
                upload: UploadComponent(),
                image: ImageComponent(),
                appStoreLinks: AppStoreLinks(),
                thirdPartyEmbed: ThirdPartyEmbed(),
                devNull: DevNull(),
                directions: Directions(),
            }
        })
    }
}