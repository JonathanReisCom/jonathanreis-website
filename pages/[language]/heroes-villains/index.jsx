import React from 'react';
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
// My Components
import SEO from 'components/Seo';
import GoogleAnalytics from 'components/GoogleAnalytics';
import TopMenuBar from 'components/TopMenuBar/TopMenuBar';
import Header from 'components/Containers/Header';
import Section from 'components/Containers/Section';
import SubSection from 'components/Containers/SubSection';
import Bold from 'components/Bold';
import CustomLink from 'components/CustomLink';
// Read Files
import fs from 'fs';
import path from 'path';

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

  paper: {
    height: 150,
    width: 200,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    minWidth: 100,
    minHeight: 100,
    borderRadius: '50%',
    MozBorderRadius: '50%',
    WebkitBorderRadius: '50%',
    boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    marginBottom: 10,
  },
};
const useStyles = makeStyles(localStyle);

const Index = (props) => {
  const classes = useStyles();
  // const router = useRouter();

  const [list, setList] = React.useState(false);

  return (
    <>
      <SEO />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header />

      <Section raised>
        <SubSection maxWidth="md" color={'light_gray'}>
          <Grid container justify="center">
            <Typography variant="h1">
              <Bold>My list of heroes and villains:</Bold>
            </Typography>
          </Grid>

          <Grid container justify="center" spacing={3}>
            {props.items.slice(0, 10).map((obj, i) => {
              const name = obj.name.toLowerCase().replace(/ /g, '-');
              const href = `/[language]/heroes-villains/${name}`;
              const as = `/pt-br/heroes-villains/${name}`;
              return (
                <Grid key={i} item>
                  <CustomLink href={href} as={as}>
                    <ButtonBase
                      focusRipple
                      className={classes.image}
                      focusVisibleClassName={classes.focusVisible}>
                      <Paper className={classes.paper}>
                        <Avatar alt={obj.name} src={obj.name} className={classes.avatar} />
                        <Typography variant="body1">
                          <Bold>{obj.name}</Bold>
                        </Typography>
                      </Paper>
                    </ButtonBase>
                  </CustomLink>
                </Grid>
              );
            })}
          </Grid>
        </SubSection>
      </Section>
    </>
  );
};

// It is related to the url and the number of pages that will be created
export const getStaticPaths = async () => {
  const paths = [{ params: { language: 'pt-br' } }, { params: { language: 'en-us' } }];
  return {
    fallback: false,
    paths: paths,
  };
};

// It is related to objects that will be sent via props
export const getStaticProps = async ({ params }) => {
  const data = await fs.readFileSync(
    path.join(process.env.PROJECT_ROOT, '/pages/[language]/heroes-villains/Heroes_and_Villains.json')
  );
  const json = JSON.parse(data);
  const props = {
    params: params,
    items: json,
  };

  return { props: props };
};

export default Index;
