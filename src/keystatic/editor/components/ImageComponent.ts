import { NotEditable, component, fields } from "@keystatic/core";
import { imageIcon } from '@keystar/ui/icon/icons/imageIcon';
import React from "react";
import { Label } from "./ui-common";


export default () => {
    return component({
        preview: ({ fields }) => {
            if (fields.file.value) {
                const objectURL = URL.createObjectURL(new Blob([fields.file.value.data]));
                return React.createElement('img', { src: objectURL }, null);
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
                publicPath: "src/assets/uploads/"
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