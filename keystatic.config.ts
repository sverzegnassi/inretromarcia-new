import { config } from '@keystatic/core';
import collection_GuideAllAcquisto from './src/keystatic/collections/guide-all-acquisto'
import collection_CoreaDelSud from './src/keystatic/collections/corea-del-sud'
import collection_Tags from './src/keystatic/collections/tags'
import collection_Assets from './src/keystatic/collections/assets'
import singleton_WebsiteConfig from './src/keystatic/singletons/website-config'
import singleton_Redirects from  './src/keystatic/singletons/redirects'

import React from 'react';

// The content of this file is hard-coded in the output during build.
// As such, changes to the configuration would be reflected
// after a new build + deploy has been successfully performed.
//
// Not a huge issue with Netlify and Cloudflare adapters (serverless environment),
// as a change in the repository normally triggers a new build
// automatically.
//
// However, it might be inconvenient when the Node adapter is in use.
const WebsiteConfig = await import("./src/data/website-config.json")

export default config({
    storage: {
        kind: 'local',
    },
    ui: {
        brand: {
            name: WebsiteConfig.default.general.titleShort ?? "Keystatic",
            mark: ({ colorScheme }) => {
                let path = colorScheme === 'dark'
                    ? '/favicon.png'
                    : '/favicon.png';

                return React.createElement("img", { src: path, height: 24 })
            },
        },
        navigation: {
            "Contenuti": [ 'acquisto', 'coreaDelSud' ],
            "Meta": [ 'tags', 'assets' ],
            "Configurazione": [ 'websiteConfig', 'redirects' ],
        }
    },
    collections: {
        acquisto: collection_GuideAllAcquisto,
        coreaDelSud: collection_CoreaDelSud,
        tags: collection_Tags,
        assets: collection_Assets,
    },
    singletons: {
        websiteConfig: singleton_WebsiteConfig,
        redirects: singleton_Redirects,
    }
});