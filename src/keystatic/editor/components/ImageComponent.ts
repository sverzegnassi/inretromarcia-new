import { NotEditable, component, fields } from "@keystatic/core";
import { imageIcon } from '@keystar/ui/icon/icons/imageIcon';
import React from "react";
import { Label, LabelWithCaption } from "./ui-common";


export default () => {
    return component({
        preview: ({ fields }) => {
            if (fields.file.value) {
                const objectURL = URL.createObjectURL(new Blob([fields.file.value.data]));
                return React.createElement('div', null,
                    React.createElement('img', { src: objectURL, loading: "lazy" }, null),
                    LabelWithCaption({
                        caption: fields.alt.value ?? "Testo alternativo non specificato",
                        text: fields.title.value ?? ""
                    })
                );
            }

            return React.createElement(NotEditable, null,
                Label({
                    text: "Carica una nuova immagine...",
                    textColor: "neutralSecondary"
                })
            );
        },
        label: "Immagine",
        schema: {
            file: fields.image({
                label: "Percorso risorsa",
                directory: "src/assets/uploads",
                publicPath: "src/assets/uploads/",
                
                /* WORKAROUND: Ensure that the user uploads a valid picture.

                    Explanation:
                    If the field is left empty due to no image being uploaded, Keystatic fails to create
                    the `file` attribute in the .mdoc when saving the document.

                    When attempting to access the .mdoc document through the Keystatic UI, the application anticipates
                    the presence of the `file` attribute.

                    As this attribute is absent, the saved `image` block deviates from the specification outlined
                    in Keystatic configuration, leading the application to throw a validation error.

                    To help identifying the issue before saving, `fields.image()` is now marked as required.

                    Example of the issue:

                    ```
                    {% image
                    title="My Caption"
                    alt="My alt text"
                    attribution={} /%}
                    ```

                    Expected format:

                    ```
                    {% image
                    file=""
                    title="My Caption"
                    alt="My alt text"
                    attribution={} /%}
                    ```
                */
                /* UPSTREAM BUG: In the current alpha version of Keystatic, document validation is not fully implemented.
                    
                    When the `image` field is left empty, a "Contains invalid fields. Please edit." label appears
                    in the block preview. This aligns with the intended behavior of `validation: { isRequired: true }`.

                    However:

                    Keystatic does not prevent the user from saving the document in an invalid state.
                    
                    The "Save" button remains in an active, hoverable, and pressable state, misleadingly suggesting
                    that the document is valid and can be successfully saved. Clicking the button triggers 
                    a validation error (see above). The document is saved in a corrupted state,
                    and can not be accessed through the GUI, necessitating manual correction in the source code.

                    Desirable fixes:

                    - Clicking the button when the document is in an invalid state should result in an error dialog
                    shown to the user. The error dialog explains why this is happening and provides indications
                    to resolve the issue (a simple "Please review the document to identify and address any errors."
                    would be sufficient).

                    - The "Save" button appears disabled and non-hoverable. Its blue, primary color is de-emphasized or
                    changed to a semantic color value that indicates "caution" or "critical." Additionally, a warning icon
                    is displayed inside the button or alongside the button. If displayed alongside the button,
                    an additional "Check the content for errors" string is visible.
                */
                validation: { isRequired: true }
            }),
            title: fields.text({
                label: 'Titolo / Didascalia',
                description: "Assegna un titolo significativo o una didascalia descrittiva ai tuoi elementi multimediali come immagini o video.",
            }),
            alt: fields.text({
                label: "Testo alternativo (Alt text)",
                description: "Fornisce una descrizione testuale breve e significativa per le immagini presenti sul sito. Questo testo viene utilizzato dai lettori di schermo e dai motori di ricerca per comprender e interpretare il contenuto visivo. L'utilizzo del testo alternativo migliora l'accessibilità del sito e favorisce una migliore indicizzazione da parte dei motori di ricerca."
            }),
            attribution: fields.object({
                source: fields.text({
                    label: "Fonte",
                    description: "Consente di specificare la fonte o l'URL da cui proviene l'immagine. Non ha effetti sulla visualizzazione e sulla distribuzione all'interno del sito. Utilizza questo campo per documentare la provenienza delle immagini utilizzate."
                }),
                author: fields.text({
                    label: "Autore / Copyright",
                    description: "Questo campo fornisce riconoscimento all'artista o al creatore dell'immagine e può essere utile per rispettare i diritti d'autore e attribuire correttamente la paternità dell'opera visiva."
                }),
                license: fields.text({
                    label: "Licenza",
                    description: "Specifica la licenza che regola l'utilizzo dell'immagine presente nei tuoi contenuti. Utilizza questa opzione per trasparenza e conformità legale riguardo alle licenze delle immagini utilizzate sul tuo sito."
                }),
            }, {
                label: "Attribuzione",
                description: "Consente di fornire riconoscimento e crediti appropriati per il lavoro o il contenuto creativo utilizzato sul tuo sito.",
            }),
        },
        toolbarIcon: imageIcon,
    })
}