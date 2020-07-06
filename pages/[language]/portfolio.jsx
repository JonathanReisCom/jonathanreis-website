import React from 'react';
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// My Components
import SEO from 'components/Seo';
import GoogleAnalytics from 'components/GoogleAnalytics';
import TopMenuBar from 'components/TopMenuBar/TopMenuBar';
import Header from 'components/Containers/Header';
import Section from 'components/Containers/Section';
import SubSection from 'components/Containers/SubSection';
import Text from 'components/Text';
import FrameDevice from 'components/FrameDevice/FrameDevice';

// Images for Hyper
import hyperDesktop from '../../public/img/hyper-english-desktop.png';
import hyperMobile from '../../public/img/hyper-english-mobile.png';

// Style
import theme from 'components/Theme';
const localStyle = {
  typo: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '25%',
    marginBottom: '40px',
    position: 'relative',
    width: '100%',
  },
  paper: {
    padding: 16,
  },

  portifolioContainer: {
    width: '100%',
    height: '100%',
    marginTop: '40px',
  },

  hyperDeviceContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    alignSelf: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  hyperDesktop: {
    width: '80%',
  },
  hyperMobile: {
    // position: 'absolute',
    // bottom: 150,
    // right: 150,
    width: 200,
    // [theme.breakpoints.down('md')]: {
    //   right: 100,
    // },
    // [theme.breakpoints.down('xs')]: {
    //   position: 'relative',
    //   width: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    // },
  },
};
const useStyles = makeStyles(localStyle);

const Index = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const isBreakpointXS = useMediaQuery(theme.breakpoints.down('xs'));
  const isBreakpointMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <SEO />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header full />

      <Section raised>
        <SubSection full maxWidth="lg" color={'gradient_orange'}>
          <Grid container direction="column" className={classes.portifolioContainer}>
            <Text variant="h2" bold center>
              Hyper English
            </Text>
            <div className={classes.hyperDeviceContainer}>
              <FrameDevice dualright images={[hyperDesktop, hyperMobile]} className={classes.hyperDesktop} />
            </div>
          </Grid>
        </SubSection>

        <SubSection full maxWidth="lg" color={'gradient_gray'}>
          <Grid container direction="column" className={classes.portifolioContainer}>
            <Text variant="h2" bold center>
              Cardapio Online do Restaurante Joaquina
            </Text>
            <div className={classes.hyperDeviceContainer}>
              <FrameDevice iphonex image={hyperMobile} className={classes.hyperMobile} />
            </div>
          </Grid>
        </SubSection>
      </Section>
    </>
  );
};

// It is relative to URL
export const getStaticPaths = async () => {
  const paths = [{ params: { language: 'pt-br' } }, { params: { language: 'en-us' } }];
  return {
    fallback: false,
    paths: paths,
  };
};

// It is relative to objects
export const getStaticProps = async ({ params }) => {
  const props = {
    params: params,
  };
  return { props: props };
};

export default Index;
