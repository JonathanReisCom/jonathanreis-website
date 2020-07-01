import React from 'react';
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
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
import Text from 'components/Text';
import CustomLink from 'components/CustomLink';
// API Heroes and Villains
import { getAllHeroesIndex } from '../../../lib/heroes-and-villains/api';

// Style
import theme from 'components/Theme';
const localStyle = {
  marginTop: {
    marginTop: '40px',
  },
  paper: {
    height: 150,
    width: 200,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 150,
      width: 150,
    },
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
            <Text variant="h1" bold center>
              My list of heroes and villains:
            </Text>
          </Grid>

          <Grid container justify="center" spacing={3} className={classes.marginTop}>
            {props.items.slice(0, 10).map((obj, i) => {
              const name = obj.name.toLowerCase().replace(/ /g, '-');
              const href = `/[language]/heroes-villains/${obj.id}/${name}`;
              const as = `/pt-br/heroes-villains/${obj.id}/${name}`;
              return (
                <Grid key={i} item>
                  <CustomLink href={href} as={as}>
                    <ButtonBase
                      focusRipple
                      className={classes.image}
                      focusVisibleClassName={classes.focusVisible}>
                      <Paper className={classes.paper}>
                        <Avatar
                          alt={obj.name}
                          // src={obj.name}
                          className={classes.avatar}
                        />
                        <Text variant="body1" bold center>
                          {obj.name}
                        </Text>
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
  const data = await getAllHeroesIndex();
  const props = {
    params: params,
    items: data,
  };
  return { props: props };
};

export default Index;
