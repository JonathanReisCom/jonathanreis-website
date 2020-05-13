const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');

// let API_URL = 'http://localhost:8080/jonathanreis-website/api';
// if (process.env.NODE_ENV === 'production') {
//   API_URL = 'http://api.jonathanreis.com';
// }

module.exports = withPlugins([[withSass], [withImages]], {
  // env: {
  //   API_URL: API_URL,
  //   customKey: 'my-value',
  // },
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});
