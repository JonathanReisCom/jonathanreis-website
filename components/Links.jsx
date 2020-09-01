import React from 'react';
// NextJs
import Router from 'next/router';
import Link from 'next/link';
// @material-ui/core components
import Base from '@material-ui/core/ButtonBase';

// nodejs libraries
import classNames from 'classnames';
import { Url } from 'url';

export const formatLink = (href, as) => {
  let res = {
    href: href,
    as: as,
  };

  if (process.env.NEED_DIRECT_LINK) {
    // res.href = `${process.env.APP_URL}${href}`;
    // res.as = `${process.env.APP_URL}${as}`;
  }

  return res;
};

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

export const ButtonBase = React.forwardRef(({ children, href, as, ...props }, ref) => {
  let _href = null;
  if (href && as) {
    _href = as;
    if (process.env.NEED_DIRECT_LINK) {
      _href = `${process.env.APP_URL}${as}`;
    }
  }
  // return null;
  return (
    <Base ref={ref} href={_href} {...props}>
      {children}
    </Base>
  );
});
