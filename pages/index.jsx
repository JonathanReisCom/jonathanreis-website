import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// My Components
import SEO from 'components/Seo';
import GoogleAnalytics from 'components/GoogleAnalytics';
import TopMenuBar from 'components/TopMenuBar/TopMenuBar';
import Header from 'components/Containers/Header';
import Section from 'components/Containers/Section';
import SubSection from 'components/Containers/SubSection';
import Bold from 'components/Bold';
import Profile from 'components/SubSections/Profile';
import GithubChart from 'components/SubSections/GithubChart';
// Images
import logo from 'assets/img/bg4.jpg';

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

  const textDefault = 'Lorem ipsum dolor sit amet';

  const loremIpsun =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero ex, tristique sit amet diam vel, vestibulum gravida nulla. Pellentesque quam nibh, mollis ut felis ut, fermentum pretium mauris. Praesent malesuada, dui nec posuere pulvinar, justo diam pellentesque enim, ut tristique nisi';

  const textElements = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
  ];

  return (
    <>
      <SEO />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header />

      <Section raised>
        <Profile />
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
