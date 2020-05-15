import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// Style
import theme from 'components/Theme';
const padding = 70;
const localStyle = {
  section: {
    paddingTop: padding,
    paddingBottom: padding,
    position: 'relative',
  },
  relative: {
    position: 'relative',
  },
  colored: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    background: 'radial-gradient(ellipse at center, #585858 0, #232323 100%)',
    // background: '-webkit-linear-gradient(#fde04c, #ffc900)'
  },
  overBottom: {
    height: `calc(100% - ${padding * 2 - padding / 2}px)`,
  },
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();

  let divColored = null;
  if (props.color) {
    divColored = (
      <div
        className={classNames({
          [classes.colored]: true,
          [classes.overBottom]: props.overBottom,
        })}
      />
    );
  }

  // return null;

  return (
    <div
      className={classNames({
        [classes.section]: true,
        [classes.overBottom]: props.overBottom,
      })}>
      {divColored}
      <Container maxWidth="md" disableGutters className={classes.relative}>
        {props.children}
      </Container>
    </div>
  );
};

export default Component;
