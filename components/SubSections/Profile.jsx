import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
// My Components
import SubSection from 'components/Containers/SubSection';
import Bold from 'components/Bold';

// Style
import theme from 'components/Theme';
const padding = theme.sizes.subSectionPadding;
const avatarSize = 160;
const localStyle = {
  containerAvatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: `calc(-${padding}px - ${avatarSize / 2}px)`,
  },
  avatar: {
    minWidth: avatarSize,
    minHeight: avatarSize,
    borderRadius: '50%',
    MozBorderRadius: '50%',
    WebkitBorderRadius: '50%',
    boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  containerProfile: {
    paddingTop: padding / 2,
    textAlign: 'center',
  },

  containerAbout: {
    paddingTop: padding / 2,
    textAlign: 'center',
  },
  containerBottom: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  align: {
    textAlign: 'center',
  },
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();

  const texts = {
    profile: 'Jonathan Reis',
    profileDesc: 'Fullstack Developer',
    // profileDesc:
    // 'Crio jogos e aplicativos, próprios ou de terceiros, para a Web e as plataformas mobile Android e IOS',
    aboutMe: 'Sobre mim',
    aboutMeDescA:
      'Invento, escrevo, codifico e faço toda a parte de desenvolvimento de Aplicativos, jogos e websites para as diversas plataformas conhecidas: Android, iOS, Web e etc...',
    aboutMeDescB: 'Crio estratégias de monetização dos aplicativos usando vendas ou anúncios in-app.',
    aboutMeDescC:
      'Sou desenvolvedor Full-Stack, apaixonado por tecnologia, e principalmente por desenvolvimento, quero por em prática todo o meu conhecimento na área de desenvolvimento de aplicativos e games, de preferência Mobile (IOS e Android), mas não limitado a isso.',
    details: 'Detalhes',
    nameTitle: 'Nome:',
    nameDesc: 'Jonathan Reis',
    ageTitle: 'Idade:',
    ageDesc: '36 anos',
    locationTitle: 'Localização:',
    locationDesc: 'Rio de Janeiro, Brasil',
    finalDesc:
      'Possuo experiência de mais de 10 anos com desenvolvimento, alocado em empresas no modelo CLT e PJ, também faço trabalhos como freelancer, desenvolvendo para empresas como Yupi Studios e Red Bull, tenho facilidade com linguagens como JavaScript, C++, PHP, Java, Swift e outras.',
  };

  const profilePhoto =
    'https://avatars2.githubusercontent.com/u/3427409?s=460&u=31771fecf4d95a1c16d06f1ff4d1d2a0af27262a&v=4';

  return (
    <SubSection maxWidth="sm">
      {/* Photo Avatar */}
      <Grid container className={classes.containerAvatar}>
        <Avatar alt="Jonathan Reis" src={profilePhoto} className={classes.avatar} />
      </Grid>

      <Grid container className={classes.containerProfile}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h2" gutterBottom>
            <Bold>{texts.profile}</Bold>
          </Typography>
          {/* <br /> */}
          <Typography variant="body1">
            <Bold>{texts.profileDesc}</Bold>
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.containerAbout}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body1" gutterBottom>
            {texts.aboutMeDescA}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {texts.aboutMeDescB}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {texts.aboutMeDescC}
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.containerAbout}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body2">{texts.aboutMeDesc}</Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6} md={6} className={classes.align}>
          <Typography variant="h4">
            <Bold>{texts.aboutMe}</Bold>
          </Typography>
          <br />
          <Typography variant="body1">{texts.aboutMeDesc}</Typography>
        </Grid>

        {/* <Grid item xs={12} sm={4} md={4} className={classes.containerAvatar}>
          <Avatar alt="Jonathan Reis" src={profilePhoto} className={classes.avatar} />
        </Grid> */}

        <Grid item xs={12} sm={6} md={6} className={classes.align}>
          <Typography variant="h4">
            <Bold>{texts.details}</Bold>
          </Typography>
          <br />

          <Typography variant="body1">
            <Bold>{texts.nameTitle}</Bold>
          </Typography>
          <Typography variant="body1">{texts.nameDesc}</Typography>

          <Typography variant="body1">
            <Bold>{texts.ageTitle}</Bold>
          </Typography>
          <Typography variant="body1">{texts.ageDesc}</Typography>

          <Typography variant="body1">
            <Bold>{texts.locationTitle}</Bold>
          </Typography>
          <Typography variant="body1">{texts.locationDesc}</Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.containerBottom}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body1">{texts.finalDesc}</Typography>
        </Grid>
      </Grid>
    </SubSection>
  );
};

export default Component;
