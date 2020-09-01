import React from 'react';
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// My Components
import Seo from 'components/Seo';
import GoogleAnalytics from 'components/GoogleAnalytics';
import TopMenuBar from 'components/TopMenuBar/TopMenuBar';
import Header from 'components/Containers/Header';
import Section from 'components/Containers/Section';
import SubSection from 'components/Containers/SubSection';
import Text from 'components/Text';
import FrameDevice from 'components/FrameDevice/FrameDevice';
import { CustomLink } from 'components/Links';
// Lodash
import get from 'lodash/get';

// Images
import hyperDesktop from '../../public/img/hyper-english-desktop.png';
import hyperMobile from '../../public/img/hyper-english-mobile.png';
import joaquinaMobile from '../../public/img/joaquina-mobile.png';
import joaquinaDisplay from '../../public/img/joaquina-display.jpg';
import joaquinaQRCode from '../../public/img/joaquina-qr-code.png';

// Texts
import textLanguage from './portfolio.json';

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
    // marginTop: '40px',
    margin: 'auto',
  },

  deviceContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    alignSelf: 'center',
    overflow: 'hidden',
    width: '100%',
    marginTop: '40px',
    marginBottom: '40px',
  },
  deviceDesktop: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '120%',
    },
  },
  deviceMobile: {
    width: '25%',
    maxWidth: 200,
  },
};
const useStyles = makeStyles(localStyle);

const Index = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const language = get(props, 'params.language', 'pt');
  const texts = textLanguage[language];
  const isBreakpointXS = useMediaQuery(theme.breakpoints.down('xs'));
  const isBreakpointMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Seo />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header full />

      <Section raised>
        <SubSection full raised maxWidth="lg">
          <Grid container direction="column" alignItems="center" className={classes.portifolioContainer}>
            <Text variant="h2" bold center margin>
              {texts.hyper_english}
            </Text>

            <ButtonBase
              href={texts.hyper_english_link}
              target={'_blank'}
              style={{ borderRadius: '30px', background: theme.gradients.rose, padding: '6px 16px' }}>
              <Text white variant="button" center>
                {texts.hyper_english_link}
              </Text>
            </ButtonBase>

            <div className={classes.deviceContainer}>
              <FrameDevice dualright images={[hyperDesktop, hyperMobile]} className={classes.deviceDesktop} />
            </div>
          </Grid>
          <Grid item xs={12} md={8} lg={8} className={classes.portifolioContainer}>
            <Text variant="body1" left dangerouslySetInnerHTML={{ __html: texts.hyper_english_desc }}></Text>
          </Grid>
        </SubSection>

        <SubSection full maxWidth="lg" color={'gradient_gray'}>
          <Grid container direction="column" alignItems="center" className={classes.portifolioContainer}>
            <Text variant="h2" bold center white margin>
              {texts.joaquina}
            </Text>

            <ButtonBase
              href={texts.joaquina_link}
              target={'_blank'}
              style={{ borderRadius: '30px', background: theme.gradients.orange, padding: '6px 16px' }}>
              <Text variant="button" center>
                {texts.joaquina_link}
              </Text>
            </ButtonBase>

            <div className={classes.deviceContainer}>
              <img src={joaquinaQRCode} className={classes.deviceMobile} />
              <FrameDevice iphonex image={joaquinaMobile} className={classes.deviceMobile} />
              <img src={joaquinaDisplay} className={classes.deviceMobile} />
            </div>
          </Grid>
          <Grid item xs={12} md={8} lg={8} className={classes.portifolioContainer}>
            <Text white variant="body1" left dangerouslySetInnerHTML={{ __html: texts.joaquina_desc }}></Text>
          </Grid>
        </SubSection>
      </Section>
    </>
  );
};

// It is relative to URL
export const getStaticPaths = async () => {
  const paths = [{ params: { language: 'pt' } }, { params: { language: 'en' } }];
  return {
    fallback: false,
    paths: paths,
  };
};

// It is relative to objects
export const getStaticProps = async ({ params }) => {
  const props = {
    params: params,
    possible_languages: ['en', 'pt'],
  };
  return { props: props };
};

export default Index;
