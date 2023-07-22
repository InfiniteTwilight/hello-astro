import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    Gallery: {
      render: component('./src/components/Gallery.astro'),
      attributes: {
        folder: { type: String },
      }
    },
  },
})