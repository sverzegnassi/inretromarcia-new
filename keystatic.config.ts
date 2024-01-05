import { config } from '@keystatic/core';
import collection_GuideAllAcquisto from './src/keystatic/collections/guide-all-acquisto'
import collection_CoreaDelSud from './src/keystatic/collections/corea-del-sud'
import collection_SchemaOrg from './src/keystatic/collections/schemas'
import singleton_WebsiteConfig from './src/keystatic/singletons/website-config'

import React from 'react';

export default config({
    storage: {
        kind: 'local',
    },
    ui: {
        brand: {
            name: "In Retromarcia",
            mark: ({ colorScheme }) => {
                let path = colorScheme === 'dark'
                    ? '/favicon.png'
                    : '/favicon.png';

                return React.createElement("img", { src: path, height: 24 })
            },
        },
        navigation: {
            "Contenuti": [ 'acquisto', 'coreaDelSud' ],
            "Meta": [ 'schemaOrg' ],
            "Configurazione": [ 'websiteConfig' ],
        }
    },
    collections: {
        acquisto: collection_GuideAllAcquisto,
        coreaDelSud: collection_CoreaDelSud,
        schemaOrg: collection_SchemaOrg,
    },
    singletons: {
        websiteConfig: singleton_WebsiteConfig,
    }
});