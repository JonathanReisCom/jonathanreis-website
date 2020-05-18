import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
// LazyLoad for image fade
import LazyLoad from 'react-lazyload';
// import ReactCSSTransitionGroup from 'react-transition-group';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DummyImage from 'react-dummy-image';
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
  align: {
    textAlign: 'center',
  },
  itemEnter: {
    opacity: 0,
  },
  itemEnterActive: {
    opacity: 1,
    transition: 'opacity 500ms ease-in',
  },
  itemExit: {
    opacity: 1,
  },
  itemExitActive: {
    opacity: 0,
    transition: 'opacity 500ms ease-in',
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

  const imageRef = React.useRef();
  const [errorCount, setErrorCount] = React.useState(0);

  const texts = {
    profile: 'Minha atividade pública no GitHub',
  };

  const handleImgError = (event) => {
    console.log(`Error ${errorCount}`, event);

    // if (errorCount < 1) {
    //   setImage(
    //     'https://media-exp1.licdn.com/dms/image/C4E03AQGb0x1oRRhwSw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=4OgQ0XmFJzNhgMooVzIFnr9FHO1b4e0mcn-C18qp4Yo'
    //   );
    // }
    // setErrorCount(errorCount + 1);
    // console.log(`Error ${errorCount}`, event);
  };

  React.useEffect(() => {
    // console.log(imageRef);
    // if (imageRef.current.complete) {
    //   console.log(imageRef.current.complete);
    //   setLoaded(true)
    // }

    if (imageRef.current) {
      console.log(imageRef.current);
    }
  }, [imageRef.current]);

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
          {/* ------- */}
          {/* <LazyLoad throttle={200} height={300}> */}
          <DummyImage text="Jonathan" width={568} />
          <br />
          <img ref={imageRef} src={image} onError={handleImgError} alt="JonathanReis Github chart" />
          <br />
          <img
            // ref={imageRef}
            src={`https://grass-graph.moshimo.works/images/JonathanReisCom.png`}
            onError={handleImgError}
            alt="JonathanReis Github chart"
          />
          {/* </LazyLoad> */}

          {/* <Typography variant="h2">
            <Bold>{texts.profile}</Bold>
          </Typography> */}
        </Grid>
      </Grid>
    </SubSection>
  );
};

export default Component;
