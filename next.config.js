const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');

const assetPrefixForNamespace = (namespace) => {
  switch (namespace) {
    case 'dev':
      return {
        url: '',
        exportTrailingSlash: false,
      };
    case 'export_linux':
      return {
        url: '/jonathanreis.com', // My apache folder in laptop with linux
        exportTrailingSlash: true,
      };
    case 'prod':
      return {
        url: 'https://jonathanreis.com',
        exportTrailingSlash: false,
      };
    case 'ghpages':
      return {
        url: '/jonathanreis-website', // My GitHub Pages folder
        exportTrailingSlash: true,
      };
  }
};

const config = assetPrefixForNamespace(process.env.NAMESPACE);

module.exports = withPlugins([[withSass], [withImages]], {
  env: {
    APP_URL: config.url,
    NEED_DIRECT_LINK: config.exportTrailingSlash,
  },

  // Folders with index.html on export
  exportTrailingSlash: config.exportTrailingSlash,

  // Set prefix for absolute links
  assetPrefix: config.url,

  webpack: (config) => {
    config.output.publicPath = `${config.url}${config.output.publicPath}`;
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});
