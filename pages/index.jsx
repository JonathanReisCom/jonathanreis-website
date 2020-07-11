import React from 'react';
import Link from 'next/link';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// Detect Browser Langage
// import i18next from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { initReactI18next } from 'react-i18next';

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
// Lodash
import get from 'lodash/get';

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
};
const useStyles = makeStyles(localStyle);

const Index = (props) => {
  const classes = useStyles();
  const [language, setLanguage] = React.useState([]);

  React.useEffect(() => {
    setLanguage(findLanguage());
  }, []);

  return (
    <>
      {/* <Seo /> */}
      {/* <GoogleAnalytics /> */}
      <TopMenuBar />
      <Header />

      <Section raised>
        <SubSection raised maxWidth="md" color={'light_gray'}>
          <Grid container justify="center">
            <Text variant="h1" bold center>
              Index Principal - {JSON.stringify(language)}
            </Text>
          </Grid>

          <Grid container justify="center">
            <ButtonBase
              href={'/[language]/portfolio'}
              as={'/en/portfolio'}
              style={{ borderRadius: '30px', background: theme.gradients.orange, padding: '6px 16px' }}>
              <Text variant="button" center>
                Portfolio
              </Text>
            </ButtonBase>

            <ButtonBase
              href={'/[language]/heroes-villains'}
              as={'/en/heroes-villains'}
              style={{ borderRadius: '30px', background: theme.gradients.orange, padding: '6px 16px' }}>
              <Text variant="button" center>
                Heroes and Villains
              </Text>
            </ButtonBase>
          </Grid>
        </SubSection>
      </Section>

      <Section raised>
        {/* <Profile /> */}
        {/* <GithubChart /> */}
      </Section>

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
