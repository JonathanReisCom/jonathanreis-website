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
const localStyle = {
  containerProfile: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  containerAvatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    minWidth: 200,
    minHeight: 200,
    border: '10px solid transparent',
    background: theme.gradients.blackRadial,
    borderRadius: '50%',
    MozBorderRadius: '50%',
    WebkitBorderRadius: '50%',
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
    profile: 'Perfil',
    profileDesc:
      'Crio jogos e aplicativos, próprios ou de terceiros, para a Web e as plataformas mobile Android e IOS',
    aboutMe: 'Sobre mim',
    aboutMeDesc:
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
    'https://media-exp1.licdn.com/dms/image/C4E03AQGb0x1oRRhwSw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=4OgQ0XmFJzNhgMooVzIFnr9FHO1b4e0mcn-C18qp4Yo';

  return (
    <SubSection>
      <Grid container className={classes.containerProfile}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h2">
            <Bold>{texts.profile}</Bold>
          </Typography>
          <br />
          <Typography variant="body1">{texts.profileDesc}</Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={4} md={4} className={classes.align}>
          <Typography variant="h4">
            <Bold>{texts.aboutMe}</Bold>
          </Typography>
          <br />
          <Typography variant="body1">{texts.aboutMeDesc}</Typography>
        </Grid>

        <Grid item xs={12} sm={4} md={4} className={classes.containerAvatar}>
          <Avatar alt="Jonathan Reis" src={profilePhoto} className={classes.avatar} />
        </Grid>

        <Grid item xs={12} sm={4} md={4} className={classes.align}>
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
