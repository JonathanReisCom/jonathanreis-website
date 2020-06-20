import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// LazyLoad for image fade
import LazyLoad from 'react-lazyload';
// import ReactCSSTransitionGroup from 'react-transition-group';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// My Components
import SubSection from 'components/Containers/SubSection';
import Bold from 'components/Bold';

// Style
import theme from 'components/Theme';
const localStyle = {
  containerProfile: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  imagem: {
    width: 560,
    height: 100,
    objectFit: 'contain',
    paddingLeft: 34,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingLeft: 18,
    },
  },
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();
  const [image, setImage] = React.useState(
    'https://grass-graph.moshimo.works/images/JonathanReisCom.png?width=568&background=none'
  );
  // SVG DIRECT: https://github.com/users/JonathanReisCom/contributions?from=2020-01-01&to=2020-12-31
  // API 1: https://grassxxx-graph.moshimo.works/images/JonathanReisCom.png?width=568&background=none
  // API 2: https://grass-graph.moshimo.works/images/JonathanReisCom.png

  const texts = {
    profile: 'Atividade no GitHub',
  };

  return (
    <SubSection color={false}>
      <Grid container className={classes.containerProfile}>
        {/* Title */}
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h2">
            <Bold>{texts.profile}</Bold>
          </Typography>
        </Grid>

        {/* Chart */}
        <Grid item xs={12} sm={12} md={12}>
          <br />
          <img className={classes.imagem} src={image} alt="JonathanReis Github chart" />
        </Grid>
      </Grid>
    </SubSection>
  );
};

export default Component;
