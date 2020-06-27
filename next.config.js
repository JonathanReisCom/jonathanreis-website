const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');

const assetPrefixForNamespace = (namespace) => {
  switch (namespace) {
    case 'prod':
      return { url: 'https://jonathanreis.com', need_extension: false };
    case 'export_linux':
      // /var/www/html/jonathanreis.com
      return { url: 'http://localhost/jonathanreis.com', need_extension: true };
    default:
      return { url: '', need_extension: false };
  }
};
const namespace = process.env.NAMESPACE;

module.exports = withPlugins([[withSass], [withImages]], {
  env: {
    APP_URL: assetPrefixForNamespace(namespace).url,
    NEED_EXTENSION: assetPrefixForNamespace(namespace).need_extension,
  },
  assetPrefix: assetPrefixForNamespace(namespace).url,
  webpack: (config) => {
    config.output.publicPath = `${assetPrefixForNamespace(namespace).url}${config.output.publicPath}`;
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});
