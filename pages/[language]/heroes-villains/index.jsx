import React from 'react';
import { useRouter } from 'next/router';
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

export function getStaticPaths() {
  const paths = [{ params: { language: 'pt-br' } }, { params: { language: 'en-us' } }];
  console.log('--- getStaticPaths ---', paths);
  return {
    fallback: false,
    paths: paths,
  };
}
export function getStaticProps({ params }) {
  console.log('--- getStaticProps ---', params);
  return { props: params };
}

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
        <h1>/[language]/heroes-villains</h1>
        <h1>Aqui posso colocar a listagem completa</h1>
        <p>
          <pre>{JSON.stringify(router, null, 2)}</pre>
        </p>
      </Section>
    </>
  );
};

export default Index;
