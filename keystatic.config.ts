import { config } from '@keystatic/core';
import collection_GuideAllAcquisto from './src/keystatic/collections/guide-all-acquisto'
import collection_CoreaDelSud from './src/keystatic/collections/corea-del-sud'
import collection_Tags from './src/keystatic/collections/tags'
import collection_Uploads from './src/keystatic/collections/uploads'
import collection_CoverImages from './src/keystatic/collections/cover-images';
import singleton_WebsiteConfig from './src/keystatic/singletons/website-config'
import singleton_Redirects from  './src/keystatic/singletons/redirects'
import singleton_Organization from './src/keystatic/singletons/organization'
import singleton_Footer from './src/keystatic/singletons/footer'

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
            "Meta": [ 'tags', 'coverImages', 'uploads' ],
            "Configurazione": [ 'websiteConfig', 'redirects', 'organization', 'footer' ],
        }
    },
    collections: {
        // IMPORTANT: The key should be in camelCase, mirroring the structure of the path.
        acquisto: collection_GuideAllAcquisto,
        coreaDelSud: collection_CoreaDelSud,
        tags: collection_Tags,
        uploads: collection_Uploads,
        coverImages: collection_CoverImages,
    },
    singletons: {
        // TODO: Might be worth renaming and reorganizing
        websiteConfig: singleton_WebsiteConfig,
        redirects: singleton_Redirects,
        organization: singleton_Organization,
        footer: singleton_Footer,
    }
});