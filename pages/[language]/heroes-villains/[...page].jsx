import React from 'react';
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// My Components
import SEO from 'components/Seo';
import GoogleAnalytics from 'components/GoogleAnalytics';
import TopMenuBar from 'components/TopMenuBar/TopMenuBar';
import Header from 'components/Containers/Header';
import Section from 'components/Containers/Section';
import SubSection from 'components/Containers/SubSection';
// API Heroes and Villains
import { getAllHeroesIndex, getHeroById } from '../../../lib/heroes-and-villains/api';

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
  const router = useRouter();

  return (
    <>
      <SEO />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header />

      <Section raised>
        <SubSection maxWidth="sm">
          <h1>/[language]/heroes-villains/[page]</h1>
          <h1>Raiz Aqui posso colocar cada um individualmente</h1>
          <p>
            <pre>{JSON.stringify(router, null, 2)}</pre>
          </p>
        </SubSection>
      </Section>
    </>
  );
};

// It is related to the url and the number of pages that will be created
export const getStaticPaths = async () => {
  const data = await getAllHeroesIndex();
  const paths = data.slice(0, 10).flatMap((obj) => {
    return [
      {
        params: {
          language: 'pt-br',
          page: [`${obj.id}`, obj.name.toLowerCase().replace(/ /g, '-')],
        },
      },
      {
        params: {
          language: 'en-us',
          page: [`${obj.id}`, obj.name.toLowerCase().replace(/ /g, '-')],
        },
      },
    ];
  });

  return {
    fallback: false,
    paths: paths,
  };
};

// It is related to objects that will be sent via props
export const getStaticProps = async ({ params }) => {
  const id = params.page[0];
  const data = await getHeroById(id);
  // console.log('---getStaticProps data:', data);
  const props = {
    params: params,
    items: data,
  };
  return { props: props };
};

export default Index;
