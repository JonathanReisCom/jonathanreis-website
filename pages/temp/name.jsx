import React from 'react';
// import { useRouter } from 'next/router';
// import fetch from 'isomorphic-unfetch';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// My Components
import SEO from 'components/Seo';
import GoogleAnalytics from 'components/GoogleAnalytics';
import TopMenuBar from 'components/TopMenuBar/TopMenuBar';
import Header from 'components/Containers/Header';
import Section from 'components/Containers/Section';

// export async function getStaticPaths() {
//   // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
//   // const list = await response.json();

//   const list = [
//     {
//       language: 'en-us',
//       name: 'batman',
//     },
//     {
//       language: 'pt-br',
//       name: 'batman',
//     },
//     {
//       language: 'en-us',
//       name: 'robin',
//     },
//   ];

//   return {
//     paths: list.map((item) => {
//       return {
//         params: {
//           language: `${item.language}`,
//           name: `${item.name}`,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }

// export function getStaticPaths() {
//   const list = [
//     {
//       language: 'en-us',
//       name: 'batman',
//     },
//     {
//       language: 'pt-br',
//       name: 'batman',
//     },
//     {
//       language: 'en-us',
//       name: 'robin',
//     },
//     {
//       language: 'pt-br',
//       name: 'robin',
//     },
//   ];
//   return {
//     paths: list.map((item) => {
//       return {
//         params: {
//           language: `${item.language}`,
//           name: `${item.name}`,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }

// export function getStaticProps({ params }) {
//   console.log('teste', params);
//   return {
//     props: {
//       language: 'pt-br',
//       name: 'batman',
//     },
//   };
// }

// export async function getStaticProps({ params }) {
//   // fetch single post detail
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//   const post = await response.json();
//   return {
//     props: post,
//   };
// }

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

const Page = (props) => {
  // const router = useRouter();

  // const { name } = router.query;
  // const { language } = router.query;

  return (
    <>
      <SEO />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header />
      {/* 
      <Section raised>
        <h1>Name: {name}</h1>
        <h1>Language: {language}</h1>
        <p>This is a dynamic page using query strings.</p>
      </Section> */}
    </>
  );
};

export default Page;
