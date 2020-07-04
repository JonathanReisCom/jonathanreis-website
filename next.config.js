const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');
const assetPrefixForNamespace = require('./config');
const myConfig = assetPrefixForNamespace(process.env.NAMESPACE);

// Loading CSS
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
  require.extensions['.css'] = (file) => {};
}

module.exports = withPlugins([[withCSS], [withSass], [withImages]], {
  env: {
    APP_URL: myConfig.folder,
    NEED_DIRECT_LINK: myConfig.exportTrailingSlash,
    PROJECT_ROOT: __dirname,
    HEROES_AND_VILLAINS_API_URL: 'https://superheroapi.com/api/1148509085520339',
    USE_CACHE: 'true',
  },

  // Folders with index.html on export
  exportTrailingSlash: myConfig.exportTrailingSlash,

  // Set prefix for absolute links
  assetPrefix: myConfig.folder,

  webpack: (config, options) => {
    const { dir, isServer } = options;
    config.output.publicPath = `${myConfig.folder}${config.output.publicPath}`;
    config.resolve.modules.push(path.resolve('./'));

    // Create my sitemap.xml
    // if (isServer) {
    //   require('./lib/generate-sitemap');
    // }

    return config;
  },
});
