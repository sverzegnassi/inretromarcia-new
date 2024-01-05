import { config } from '@keystatic/core';
import collection_GuideAllAcquisto from './src/keystatic/collections/guide-all-acquisto'
import collection_CoreaDelSud from './src/keystatic/collections/corea-del-sud'
import collection_Categories from './src/keystatic/collections/categories'
import collection_SchemaOrg from './src/keystatic/collections/schemas'
import singleton_WebsiteConfig from './src/keystatic/singletons/website-config'
import singleton_Redirects from  './src/keystatic/singletons/redirects'

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
            "Meta": [ 'categories', 'schemaOrg' ],
            "Configurazione": [ 'websiteConfig', 'redirects' ],
        }
    },
    collections: {
        acquisto: collection_GuideAllAcquisto,
        coreaDelSud: collection_CoreaDelSud,
        categories: collection_Categories,
        schemaOrg: collection_SchemaOrg,
    },
    singletons: {
        websiteConfig: singleton_WebsiteConfig,
        redirects: singleton_Redirects,
    }
});