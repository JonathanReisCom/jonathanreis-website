import React from 'react';
import Link from 'next/link';

const CustomLink = ({ children, href, as }) => {
  if (process.env.NEED_DIRECT_LINK) {
    return React.cloneElement(children, { href: `${process.env.APP_URL}${as}` });
  }

  return (
    <Link href={href} as={as}>
      {children}
    </Link>
  );
};

export default CustomLink;
