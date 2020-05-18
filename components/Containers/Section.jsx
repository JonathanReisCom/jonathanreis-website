import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// Style
import theme from 'components/Theme';
const overSize = theme.sizes.sectionOverSize;
const defaultGutter = theme.sizes.defaultGutter;
const localStyle = {
  raised: {
    position: 'relative',
    margin: `-${overSize}px ${defaultGutter}px 0px`,
    backgroundColor: 'white',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    borderRadius: '6px',
    [theme.breakpoints.down('xs')]: {
      margin: `-${overSize}px 0.5rem 0px`,
    },
  },
  notRaised: {
    margin: `0 ${defaultGutter}0px 60px`,
    [theme.breakpoints.down('xs')]: {
      margin: '0 0.5rem 60px',
    },
  },
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classNames({
        [classes.raised]: props.raised,
        [classes.notRaised]: !props.raised,
      })}>
      {props.children}
    </div>
  );
};

export default Component;
