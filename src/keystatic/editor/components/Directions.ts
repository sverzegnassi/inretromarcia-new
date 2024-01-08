import { NotEditable, component, fields, type BasicFormField } from "@keystatic/core";
import { Label, LabelWithCaption } from "./ui-common";
import { css, tokenSchema } from '@keystar/ui/style';
import React from "react";

type SelectFormField = BasicFormField<string> & {
    options: readonly {
        label: string;
        value: string;
    }[];
}

function getSelectFieldLabel(select: SelectFormField, value: string) {
    return select.options.find((el) => el.value === value)?.label ?? "undefined"
}

export default () => {
    return component({
        preview: ({ fields }) => {
            if (!fields.poiName.value) {
                return React.createElement(NotEditable, null,
                    Label({
                        text: "Specifica il nome per il punto di interesse",
                        textColor: "caution"
                    })
                );
            }

            if (!fields.addressLine1.value) {
                return React.createElement(NotEditable, null,
                    Label({
                        text: "Specifica almeno la prima linea dell'indirizzo",
                        textColor: "caution"
                    })
                );
            }

            return React.createElement(NotEditable, {
                className: css({
                    display: "flex",
                    flexDirection: "column",
                    rowGap: tokenSchema.size.space.xsmall
                })
            },
                Label({
                    text: fields.poiName.value,
                    textColor: "neutralEmphasis"
                }),
                Label({
                    text: fields.addressLine1.value,
                    textColor: "neutralSecondary"
                }),
                Label({
                    text: fields.addressLine2.value,
                    textColor: "neutralSecondary"
                }),
                React.createElement('div', { className: css({ marginTop: tokenSchema.size.space.regular }) },
                    LabelWithCaption({
                        text: function() {
                            if (!fields.maps.elements) {
                                return "Nessun servizio"
                            }

                            return fields.maps.elements
                                .map(el => getSelectFieldLabel(el.schema.discriminant, el.discriminant))
                                .join(", ")
                        }(),
                        caption: "Servizi di mappe configurati"
                    })
                )
            );
        },
        label: "Indicazioni (Mappa)",
        schema: {
            poiName: fields.text({
                label: "Nome del Punto di Interesse",
            }),
            addressLine1: fields.text({
                label: "Indirizzo (linea 1)",
                description: "Specifica l'indirizzo internazionale (es. in caratteri latini)"
            }),
            addressLine2: fields.text({
                label: "Indirizzo (linea 2)",
                description: "Specificare l'indirizzo nella lingua locale",
            }),
            maps: fields.array(
                fields.conditional(
                    fields.select({
                        label: "Servizio di mappe",
                        description: "Scegli il servizio di mappe da utilizzare per generare un link rapido alle indicazioni stradali.",
                        options: [
                            { label: "Seleziona un servizio", value: "none" },
                            { label: "Google Maps", value: "google" },
                            { label: "Naver Maps", value: "naver" },
                        ],
                        defaultValue: "none"
                    }),
                    {
                        none: fields.empty(),
                        google: fields.text({
                            label: "ID del punto di interesse"
                        }),
                        naver: fields.text({
                            label: "ID del punto di interesse"
                        })
                    }
                ),
                {
                    label: "Indicazioni stradali",
                    description: "Seleziona i servizi di mappe da includere per fornire indicazioni stradali dettagliate.",
                    itemLabel: (props) => getSelectFieldLabel(props.schema.discriminant, props.discriminant)
                }
            )
        }
    })
}