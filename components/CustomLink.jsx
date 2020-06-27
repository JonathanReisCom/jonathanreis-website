import Link from 'next/link';
import { format } from 'url';

const CustomLink = ({ children, ...props }) => {
  let link = `${process.env.APP_URL}${format(props.href)}`;

  if (process.env.NEED_EXTENSION) {
    link = `${process.env.APP_URL}${format(props.href)}.html`;
  }

  // if (props.href === '/') {
  //   link = `${process.env.APP_URL}${format(props.href)}`;
  // }

  return (
    <Link {...props} as={link}>
      {children}
    </Link>
  );
};

export default CustomLink;
