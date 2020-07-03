import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// My Components
import TopMenuLinks from 'components/TopMenuBar/TopMenuLinks';
import Text from 'components/Text';
import CustomLink from 'components/CustomLink';
// Lodash
import get from 'lodash/get';
// Images
import logo from 'assets/images/logo-jonathan-reis-com.png';

// Style
import theme from 'components/Theme';
const localStyle = {
  appBar: {
    display: 'flex',
    border: '0',
    width: '100%',
    height: '80px',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'fixed',
  },
  appResponsive: {
    margin: '20px 10px',
  },
  flex: {
    flex: 1,
  },
  glass: {
    boxShadow: `1px 1px ${theme.palette.primary.main}`,
    // backgroundColor: 'rgba(0,0,0,0.7)',
    backgroundColor: 'rgba(50,50,50,0.6)',
  },
  black: {
    boxShadow: `1px 1px ${theme.palette.primary.main}`,
    backgroundColor: '#121212',
  },
  toolbar: {
    color: theme.palette.text.menubar,
    height: '100%',
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    position: 'relative',
    width: '100%',
  },
  toolbarEnd: {
    height: '100%',
    overflow: 'hidden',
  },
  brand: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '1rem',
  },
  logoImage: {
    height: '35px',
    marginTop: '-0.5rem',
  },
  h1Variant: {
    fontSize: '1.5rem',
    color: 'white',
    textAlign: 'left',
    background:
      '-webkit-linear-gradient(#9DCCEF, #fff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;',
  },
  viewOn: {
    display: 'flex',
  },
  viewOff: {
    display: 'none',
  },
  paddingRight: {
    paddingRight: 0,
  },
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();
  const language = get(props, 'params.language', 'pt-br');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  }, []);

  const changeColorOnScroll = {
    height: 400,
    color: 'black',
  };

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName('header')[0].classList.remove(classes.glass);
      document.body.getElementsByTagName('header')[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName('header')[0].classList.add(classes.glass);
      document.body.getElementsByTagName('header')[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const brand = (
    // <CustomLink href={`/[language]`} as={`/${language}`}>
    <CustomLink href={`/`} as={`/`}>
      <Text variant={'h1'} bold className={classes.h1Variant}>
        JonathanReis.com
      </Text>
    </CustomLink>
  );
  // const brand = (
  //   <div className={classes.brand}>
  //     <img className={classes.logoImage} src={logo} alt="Logo JonathanReis.com"></img>
  //   </div>
  // );
  const leftLinks = null;
  const rightLinks = <TopMenuLinks />;

  return (
    <AppBar
      className={classNames({
        [classes.appBar]: true,
        [classes.glass]: true,
      })}>
      <Container maxWidth="md" disableGutters>
        <Toolbar className={classes.toolbar}>
          {leftLinks !== undefined ? brand : null}

          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brand
            )}
          </div>

          {/* Aparece ao ficar acima de md e se esconde ao ficar abaixo de md */}
          <Hidden xsDown implementation="css" className={classes.toolbarEnd}>
            {rightLinks}
          </Hidden>

          {/* Aparece ao ficar abaixo de sm e se esconde ao ficar acima de sm */}
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              className={classes.paddingRight}>
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>

      {/* Aparece ao chegar no brakpoint mdUp */}
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          // classes={{
          //   paper: classes.drawerPaper
          // }}
          onClose={handleDrawerToggle}>
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Component;
