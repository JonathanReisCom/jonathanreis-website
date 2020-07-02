import React from 'react';
import { useRouter } from 'next/router';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Pagination from '@material-ui/lab/Pagination';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
// Choosem Image for Header
import headerImage from '../../../public/img/bg-marvel-vs-dc-heroes.jpg';
// Lodash
import get from 'lodash/get';

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
      height: 135,
      width: 135,
    },
  },
  good: {
    background: '-webkit-linear-gradient(#5AA0D1, #FFFFFF)',
  },
  bad: {
    background: '-webkit-linear-gradient(#FE6D68, #FFFFFF)',
  },
  avatar: {
    minWidth: 100,
    minHeight: 100,
    borderRadius: '50%',
    MozBorderRadius: '50%',
    WebkitBorderRadius: '50%',
    boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      minWidth: 70,
      minHeight: 70,
    },
  },
};
const useStyles = makeStyles(localStyle);

const Index = (props) => {
  const classes = useStyles();
  // const router = useRouter();

  const items = get(props, 'items', []);
  const itemsPerPage = 12;
  const totalPages = Math.round(items.length / itemsPerPage);
  const [page, setPage] = React.useState(1);
  const [slice, setSlice] = React.useState([0, itemsPerPage]);
  const handleChange = (event, value) => {
    const x = itemsPerPage * (value - 1);
    const y = x + itemsPerPage;
    setPage(value);
    setSlice([x, y]);
  };

  const isBreakpointXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <SEO />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header images={[headerImage]} />

      <Section raised>
        <SubSection maxWidth="md" color={'light_gray'}>
          <Grid container justify="center">
            <Text variant="h1" bold center>
              My list of heroes and villains:
            </Text>
          </Grid>

          <Grid container justify="center" direction="row" className={classes.marginTop}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
              size={isBreakpointXS ? 'small' : 'large'}
            />
          </Grid>

          <Grid container justify="center" spacing={isBreakpointXS ? 2 : 3} className={classes.marginTop}>
            {items.slice(slice[0], slice[1]).map((obj, i) => {
              const name = obj.name.toLowerCase().replace(/ /g, '-');
              const href = `/[language]/heroes-villains/${obj.id}/${name}`;
              const as = `/pt-br/heroes-villains/${obj.id}/${name}`;
              const img = get(obj, 'image', null);
              const alignment = get(obj, 'alignment', null);

              return (
                <Grid key={i} item>
                  <CustomLink href={href} as={as}>
                    <ButtonBase
                      focusRipple
                      className={classes.image}
                      focusVisibleClassName={classes.focusVisible}>
                      <Paper
                        className={classNames({
                          [classes.paper]: true,
                          [classes[alignment]]: alignment,
                        })}>
                        <Avatar alt={obj.name} src={img} className={classes.avatar} />
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
