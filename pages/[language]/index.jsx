import React from 'react';
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// My Components
import Seo from 'components/Seo';
import GoogleAnalytics from 'components/GoogleAnalytics';
import TopMenuBar from 'components/TopMenuBar/TopMenuBar';
import Header from 'components/Containers/Header';
import Section from 'components/Containers/Section';
import SubSection from 'components/Containers/SubSection';

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
      <Seo />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header />

      <Section raised>
        <SubSection raised maxWidth="sm">
          <h1>/[language]</h1>
          <p>
            <pre>{JSON.stringify(router, null, 2)}</pre>
          </p>
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
  };
  return { props: props };
};

export default Index;
