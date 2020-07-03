import React from 'react';
import Link from 'next/link';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// Style
// import theme from 'components/Theme';
// const localStyle = {
//   link: {
//     backgroundColor: 'red',
//     cursor: 'pointer',
//   },
// };
// const useStyles = makeStyles(localStyle);

const CustomLink = ({ children, href, as, passHref }) => {
  // const classes = useStyles();

  if (process.env.NEED_DIRECT_LINK) {
    // return React.cloneElement(children, { href: `${process.env.APP_URL}${as}` });
    return <a href={`${process.env.APP_URL}${as}`}>{children}</a>;
  }

  // const childrenWithExtraProp = React.Children.map(children, (child) => {
  //   return React.cloneElement(child, {
  //     className: classNames({
  //       [child.props.className]: true,
  //       [classes.link]: true,
  //     }),
  //   });
  // });

  return (
    <Link href={href} as={as} passHref>
      <a>{children}</a>
      {/* <a>{childrenWithExtraProp}</a> */}
    </Link>
  );
};

export default CustomLink;
