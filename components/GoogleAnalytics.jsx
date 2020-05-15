import React from 'react';
import ReactGA from 'react-ga';

const Component = () => {
  const myGoogleTag = 'UA-48816576-2';

  const registerPageView = () => {
    let pathname = window.location.pathname;
    if (pathname == '/') {
      pathname = 'index';
    }
    // console.log(`Logging pageview for ${pathname}`);
    // console.log('------------', process.env.NODE_ENV);
    if (process.env.NODE_ENV == 'production') {
      ReactGA.set({ page: pathname });
      ReactGA.pageview(pathname);
    }
  };

  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize(myGoogleTag);
      window.GA_INITIALIZED = true;
    }
    registerPageView();
  }, []);

  return null;
};

export default Component;
