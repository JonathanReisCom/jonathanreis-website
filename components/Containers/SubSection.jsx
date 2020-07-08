import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// Style
import theme from 'components/Theme';
const padding = theme.sizes.subSectionPadding;
const overSize = theme.sizes.sectionOverSize;
const localStyle = {
  subSection: {
    paddingTop: padding,
    paddingBottom: padding,
    position: 'relative',
    '& + &': {
      marginTop: '-10px',
    },
  },
  full: {
    minHeight: '100vh',
  },
  noPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  raised: {
    paddingTop: overSize,
  },
  noPaddingforMobile: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  relative: {
    position: 'relative',
    height: '100%',
  },
  overBottom: {
    height: `calc(100% - ${padding * 2 - padding / 2}px)`,
  },
  // COLORS
  colored: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    borderRadius: '6px',
  },
  gradient_gray: {
    background: 'radial-gradient(ellipse at center, #585858 0, #232323 100%)',
  },
  gradient_orange: {
    background: '-webkit-linear-gradient(#fde04c, #ffc900)',
  },
  light_gray: {
    backgroundColor: '#f5f5f5',
  },
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();

  const maxWidth = () => {
    if (props.maxWidth) {
      return props.maxWidth;
    } else {
      return 'md';
    }
  };

  let divColored = null;
  if (props.color) {
    divColored = (
      <div
        className={classNames({
          [classes.colored]: true,
          [classes[props.color]]: true,
          [classes.overBottom]: props.overBottom,
        })}
      />
    );
  }

  return (
    <div
      className={classNames({
        [classes.subSection]: true,
        [classes.raised]: props.raised,
        [classes.full]: props.full,
        [classes.overBottom]: props.overBottom,
        [classes.noPaddingforMobile]: props.noPaddingforMobile,
        [classes.noPadding]: props.noPadding,
      })}>
      {divColored}
      <Container maxWidth={maxWidth()} disableGutters={props.disableGutters} className={classes.relative}>
        {props.children}
      </Container>
    </div>
  );
};

export default Component;
