import { defineMarkdocConfig, component, nodes } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document, // Apply defaults for other options
      render: null, // default 'article'
    },
  },
  tags: {
    upload: {
      render: component('./src/components/markdocBlocks/UploadComponent.astro'),
      attributes: {
        ref: { type: String },
      },
    },
    image: {
      render: component('./src/components/markdocBlocks/ImageComponent.astro'),
      attributes: {
        file: { type: String },
        title: { type: String },
        alt: { type: String },
        attribution: { type: Object },
      },
    },
    appStoreLinks: {
      render: component('./src/components/markdocBlocks/AppStoreLinks.astro'),
      attributes: {
        name: { type: String },
        googlePlay: { type: String },
        apple: { type: String },
      },
    },
    devNull: {
      render: component('./src/components/markdocBlocks/DevNull.astro'),
      attributes: {
        content: { type: String }
      },
    },
    thirdPartyEmbed: {
      render: component('./src/components/markdocBlocks/ThirdPartyEmbed.astro'),
      attributes: {
        service: { type: Object },
      },
    },
    directions: {
      render: component('./src/components/markdocBlocks/Directions.astro'),
      attributes: {
        poiName: { type: String },
        addressLine1: { type: String },
        addressLine2: { type: String },
        maps: { type: Array }
      },
    }
  },
});

