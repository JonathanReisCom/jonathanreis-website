import React from 'react';
// NextJs
import Router from 'next/router';
import Link from 'next/link';

// nodejs libraries
import classNames from 'classnames';
import { Url } from 'url';

export const CustomLink = ({ children, href, as, passHref, target }) => {
  if (process.env.NEED_DIRECT_LINK) {
    return (
      <a href={`${process.env.APP_URL}${as}`} target={target}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} as={as} passHref={passHref} /*target={target}*/>
      <a>{children}</a>
    </Link>
  );
};

export const ChangeLink = ({ href, as, query }) => {
  if (process.env.NEED_DIRECT_LINK) {
    let url = (0, Url.format)({
      pathname: `${process.env.APP_URL}${as}`,
      query,
    });
    window.history.pushState(null, null, url);
  } else {
    Router.push(
      {
        pathname: href,
        query,
      },
      {
        pathname: as,
        query,
      },
      { shallow: true }
    );
  }
};
