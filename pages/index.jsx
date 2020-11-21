import React from 'react';
import Link from 'next/link';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// nodejs library that concatenates classes
import classNames from 'classnames';

// My Components
import Seo from 'components/Seo';
import GoogleAnalytics from 'components/GoogleAnalytics';
import TopMenuBar from 'components/TopMenuBar/TopMenuBar';
import Header from 'components/Containers/Header';
import Section from 'components/Containers/Section';
import SubSection from 'components/Containers/SubSection';
import Text from 'components/Text';
import Profile from 'components/SubSections/Profile';
import GithubChart from '../components/SubSections/GithubChart';
import { ButtonBase, CustomLink } from 'components/Links';
import { findLanguage } from '../lib/language';

// Spring for animations
import { useTransition, animated, config } from 'react-spring';

// Lodash
import get from 'lodash/get';

// Texts
import textLanguage from './index.json';

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

  header: {
    background: theme.gradients.black,
    height: 400,
    overflow: 'hidden',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    display: 'flex',
  },
  full: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    willChange: 'opacity',
  },

  glass: {
    // boxShadow: `1px 1px ${theme.palette.primary.main}`,
    backgroundColor: 'rgba(50,50,50,0.6)',
    zIndex: 2,
    width: '100%',
    height: '80px',
    bottom: '100px',
    position: 'fixed',
    color: 'white',
    display: 'flex',
  },
};
const useStyles = makeStyles(localStyle);

const Index = (props) => {
  const classes = useStyles();

  // LANGUAGE
  const [language, setLanguage] = React.useState(null);
  const [texts, setTexts] = React.useState({});
  React.useEffect(() => {
    setLanguage(findLanguage());
  }, []);
  React.useEffect(() => {
    setTexts(textLanguage[language] || {});
  }, [language]);

  // BACKGROUND
  const imageArray = [
    { id: 0, url: require('public/img/hyper-english-cover.jpg') },
    { id: 1, url: require('public/img/bg-marvel-vs-dc-heroes.jpg') },
  ];
  const [imageController, setImageController] = React.useState(0);
  const transitions = useTransition(imageArray[imageController], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  React.useEffect(() => {
    const timer = setInterval(() => {
      setImageController((x) => (x + 1) % imageArray.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* <Seo /> */}
      {/* <GoogleAnalytics /> */}
      <TopMenuBar />

      <div
        className={classNames({
          [classes.glass]: true,
        })}>
        <Text variant="h3" bold center style={{ margin: 'auto' }}>
          Index Principal - {JSON.stringify(language)} - {imageController}
        </Text>
        <Text variant="body1" bold center>
          Params - {JSON.stringify(texts)}
        </Text>
      </div>

      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          className={classNames({
            [classes.full]: true,
            [classes.header]: true,
          })}
          style={{
            ...props,
            backgroundImage: item.url ? 'url(' + item.url + ')' : null,
          }}></animated.div>
      ))}

      {/* <Section raised>
        <SubSection raised maxWidth="md" color={'light_gray'}>
          <Grid container direction="column" justify="center">
            <Text variant="h1" bold center>
              Index Principal - {JSON.stringify(language)}
            </Text>
            <Text variant="body1" bold center>
              Params - {JSON.stringify(texts)}
            </Text>
          </Grid>

          <Grid container direction="column" alignItems="center">
            <ButtonBase
              href={'/[language]/portfolio'}
              as={`/${language}/portfolio`}
              style={{ borderRadius: '30px', background: theme.gradients.orange, padding: '6px 16px' }}>
              <Text variant="button" center>
                Portfolio
              </Text>
            </ButtonBase>

            <ButtonBase
              href={'/[language]/heroes-villains'}
              as={'/en/heroes-villains'} // TEMP: "en" is a fixed language for this page
              style={{ borderRadius: '30px', background: theme.gradients.orange, padding: '6px 16px' }}>
              <Text variant="button" center>
                Heroes and Villains
              </Text>
            </ButtonBase>
          </Grid>
        </SubSection>
      </Section> */}

      {/* <Section raised>
        <Profile />
        <GithubChart />
      </Section> */}

      {/* <SubSection color={'red'} overBottom> */}
      {/* <Grid container>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper}>{loremIpsun}</Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper}>{loremIpsun}</Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper}>{loremIpsun}</Paper>
            </Grid>
          </Grid> */}
      {/* </SubSection> */}

      {/* <SubSection>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <Paper className={classes.paper}>{loremIpsun}</Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Paper className={classes.paper}>{loremIpsun}</Paper>
            </Grid>
          </Grid>
        </SubSection>
      </Section> */}

      {/* <Section>
        <SubSection>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <Paper className={classes.paper}>{loremIpsun}</Paper>
            </Grid>
          </Grid>
        </SubSection>
      </Section> */}

      {/* <Section raised>
        <SubSection>
          <Grid container>
            {textElements.map((value, index) => {
              return (
                <div key={index} className={classes.typo}>
                  <Typography variant="caption">{value}</Typography>
                  <Typography variant={`${value}`}>
                    <Bold>{textDefault}</Bold>
                  </Typography>
                  <Typography variant={`${value}`}>{textDefault}</Typography>
                </div>
              );
            })}
          </Grid>
        </SubSection> */}
    </>
  );
};

export default Index;
