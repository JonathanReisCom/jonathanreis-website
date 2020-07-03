import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Style
import theme from 'components/Theme';
const localStyle = {
  bold: {
    fontWeight: '700',
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  left: { textAlign: 'left' },
};
const useStyles = makeStyles(localStyle);

const Component = ({ children, bold, center, className, ...props }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classNames({
        [classes.center]: center,
        [classes.bold]: bold,
        [className]: className,
      })}
      {...props}>
      {children}
    </Typography>
  );
};

export default Component;
