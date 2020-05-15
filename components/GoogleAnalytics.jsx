import React from 'react';

const Component = () => {
  const myGoogleTag = 'UA-48816576-2';

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${myGoogleTag}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${myGoogleTag}');
          </script>
          `,
        }}
      />
    </>
  );
};

export default Component;
