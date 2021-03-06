import React from 'react';
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// My Components
import Seo from 'components/Seo';
import GoogleAnalytics from 'components/GoogleAnalytics';
import TopMenuBar from 'components/TopMenuBar/TopMenuBar';
import Header from 'components/Containers/Header';
import Section from 'components/Containers/Section';
import SubSection from 'components/Containers/SubSection';
import Text from 'components/Text';
// API Heroes and Villains
import { getAllHeroesIndex, getHeroById } from '../../../lib/heroes-and-villains/api';
// Lodash
import get from 'lodash/get';
import capitalize from 'lodash/capitalize';
// Image for Header
import headerImage from '../../../public/img/bg-marvel-vs-dc-heroes.jpg';

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
  card: {
    marginTop: '-230px',
    padding: 10,
  },
  media: {
    borderRadius: 6,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  tableCellOne: {
    width: 200,
    [theme.breakpoints.down('xs')]: {
      width: 120,
      paddingRight: 0,
    },
  },
};
const useStyles = makeStyles(localStyle);

const Index = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const language = get(props, 'params.language', 'pt');
  const hero = get(props, 'items', null);

  const makeTable = (key, element) => {
    return (
      <>
        <Text gutterBottom variant="caption" component="p" bold>
          {key.toUpperCase()}
        </Text>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table" size="small">
            <TableBody>
              {Object.entries(element).map(([key, value]) => {
                return makeTableRow(key, value);
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </>
    );
  };

  const makeTableRow = (title, value) => {
    // Stringfy
    let str = '';
    if (Array.isArray(value)) {
      str = value.join(', ');
    } else {
      str = value;
    }

    // Split Commas
    let newValue = '';
    if (title == 'relatives') {
      newValue = str.split('; ');
    } else {
      newValue = str.split(', ');
    }

    // Format Title
    let newTitle = capitalize(title.replace(/-/g, ' '));

    return (
      <StyledTableRow key={newTitle}>
        <StyledTableCell component="th" scope="row" className={classes.tableCellOne}>
          <Text gutterBottom variant="body1" component="p">
            {newTitle}:
          </Text>
        </StyledTableCell>

        <StyledTableCell align="left">
          {newValue.map((v, i) => (
            <Text key={i} gutterBottom variant="body1" component="p">
              {v}
            </Text>
          ))}
        </StyledTableCell>
      </StyledTableRow>
    );
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      verticalAlign: 'top',
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <>
      <Seo />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header images={[headerImage]} />

      <Section raised>
        <SubSection raised maxWidth="sm" color={'light_gray'} noPaddingforMobile>
          <Grid container justify="center" direction="column">
            <Card className={classes.card}>
              {/* Navigation */}

              {/* Image */}
              <CardMedia
                className={classes.media}
                component="img"
                alt={hero.name}
                image={hero.image.url}
                title={hero.name}
              />

              {/* Data */}
              <CardContent>
                <Text gutterBottom variant="h2" bold>
                  {hero.name}
                </Text>

                {makeTable('biography', hero.biography)}
                {makeTable('appearance', hero.appearance)}
                {makeTable('work', hero.work)}
                {makeTable('connections', hero.connections)}
              </CardContent>

              {/* Other Related */}
            </Card>
          </Grid>
        </SubSection>
      </Section>
    </>
  );
};

// It is related to the url and the number of pages that will be created
export const getStaticPaths = async () => {
  const data = await getAllHeroesIndex();

  const paths = data.flatMap((item) => {
    return [
      // {
      //   params: {
      //     language: 'pt',
      //     page: [`${item.id}`, item.name.toLowerCase().replace(/ /g, '-')],
      //   },
      // },
      {
        params: {
          language: 'en',
          page: [`${item.id}`, item.name.toLowerCase().replace(/ /g, '-')],
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

  const props = {
    params: params,
    possible_languages: ['en'],
    items: data,
  };
  return { props: props };
};

export default Index;
