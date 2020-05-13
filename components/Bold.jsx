import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// Style
import theme from 'components/Theme';
const localStyle = {
  bold: {
    fontWeight: '700',
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
  }
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();
  return <b className={classes.bold}>{props.children}</b>;
};

export default Component;
