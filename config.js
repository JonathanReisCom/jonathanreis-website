module.exports = (namespace) => {
  switch (namespace) {
    case 'dev':
      return {
        domain: 'http://localhost:3000/',
        folder: '',
        exportTrailingSlash: false,
      };
    case 'export_linux':
      return {
        domain: 'http://localhost',
        folder: '/jonathanreis.com',
        filesystem: '/var/www/html/jonathanreis.com', // My apache folder in laptop with linux
        exportTrailingSlash: true,
      };
    case 'prod':
      return {
        domain: 'https://jonathanreis.com',
        folder: 'https://jonathanreis.com',
        exportTrailingSlash: false,
      };
    case 'ghpages':
      return {
        domain: 'https://jonathanreiscom.github.io',
        folder: '/jonathanreis-website', // My GitHub Pages folder
        exportTrailingSlash: true,
      };
  }
};
