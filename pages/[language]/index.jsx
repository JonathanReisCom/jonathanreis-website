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
import SubSection from 'components/Containers/SubSection';
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
  const paths = [{ params: { language: 'pt-br' } }, { params: { language: 'en-us' } }];
  return {
    fallback: false,
    paths: paths,
  };
};

// It is relative to objects
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