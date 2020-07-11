import React from 'react';
// NextJS
import Link from 'next/link';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// import { Instagram, LinkedIn, Search } from '@material-ui/icons';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Translate from '@material-ui/icons/EditLocation';
// Lodash
import get from 'lodash/get';
// My Components
import Text from 'components/Text';
import DropDown from './DropDown';
import { ButtonBase, CustomLink } from 'components/Links';
import { findLanguage, setLanguageInLocalStorage } from '../../lib/language';
// Images
import logo from 'assets/images/logo-jonathan-reis-com.png';

// Texts
import textLanguage from './TopMenuLinks.json';

// Style
import theme from 'components/Theme';
const localStyle = {
  list: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      display: 'block',
      backgroundColor: 'gray',
    },
  },
  listItem: {
    float: 'left',
    position: 'relative',
    width: 'auto',
    margin: '0',
    padding: '0',
  },
  listButton: {
    color: theme.palette.text.menubar,
    padding: '1rem',
    minWidth: '20px',
    '&:hover,&:focus': {
      background: 'rgba(200, 200, 200, 0.2)',
    },
  },
  icons: {
    width: '20px',
    height: '20px',
  },
  text: {
    marginLeft: '0.5rem',
  },
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();
  // const language = get(props, 'params.language', 'pt');

  const [language, setLanguage] = React.useState(null);
  const [texts, setTexts] = React.useState({});
  React.useEffect(() => {
    setLanguage(findLanguage());
  }, []);
  React.useEffect(() => {
    setTexts(textLanguage[language] || {});
  }, [language]);

  // const links = {
  //   github: {
  //     href: 'https://github.com/JonathanReisCom',
  //     target: '_blank',
  //     tooltip: 'Meu Github',
  //   },
  //   linkedin: {
  //     href: 'https://www.linkedin.com/in/jonathan-reis-com/',
  //     target: '_blank',
  //     tooltip: 'Me siga no LinkedIn',
  //   },

  //   instagram: {
  //     href: 'https://www.instagram.com/jonathanreis/',
  //     target: '_blank',
  //     tooltip: 'Me siga no Instagram',
  //   },
  // };

  // Tooltip language Controll Start
  const [tooltipLanguageOpen, setTooltipLanguageOpen] = React.useState({ open: false, blocked: false });
  const handleTooltipClose = () => {
    if (!tooltipLanguageOpen.blocked)
      setTooltipLanguageOpen({ open: false, blocked: tooltipLanguageOpen.blocked });
  };
  const handleTooltipOpen = () => {
    if (!tooltipLanguageOpen.blocked)
      setTooltipLanguageOpen({ open: true, blocked: tooltipLanguageOpen.blocked });
  };
  const handleTooltipBlock = (open, blocked) => {
    setTooltipLanguageOpen({ open: open, blocked: blocked });
  };
  // Tooltip language Controll End

  const changeLanguage = (language) => {
    console.log('changeLanguage', language);
    setLanguageInLocalStorage(language);
    window.location.reload();
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* Language Button */}

        <Tooltip
          id="language-tooltip"
          title={`${texts.change_language}`}
          placement={'bottom'}
          open={tooltipLanguageOpen.open}
          onClose={handleTooltipClose}
          onOpen={handleTooltipOpen}
          arrow
          classes={{ tooltip: classes.tooltip }}>
          <DropDown
            className={classes.listButton}
            onOpen={handleTooltipBlock}
            navDropdown
            buttonText={`${texts.language}`}
            caret={true}
            hoverColor="primary"
            ButtonIcon={Translate}
            dropdownList={[
              <Text onClick={() => changeLanguage('en')}>English</Text>,
              <Text onClick={() => changeLanguage('pt')}>Português</Text>,
              //
            ]}
          />
        </Tooltip>

        {/* LinkedIn Button */}
        <Tooltip
          id="gitHub-tooltip"
          title={`${texts.github_tooltip}`}
          placement={'bottom'}
          arrow
          classes={{ tooltip: classes.tooltip }}>
          <Button className={classes.listButton} href={`${texts.github_link}`} target={'_blank'}>
            <GitHub className={classes.icons} />
          </Button>
        </Tooltip>

        {/* LinkedIn Button */}
        <Tooltip
          id="linkedin-tooltip"
          title={`${texts.linkedin_tooltip}`}
          placement={'bottom'}
          arrow
          classes={{ tooltip: classes.tooltip }}>
          <Button className={classes.listButton} href={`${texts.linkedin_link}`} target={'_blank'}>
            <LinkedIn className={classes.icons} />
          </Button>
        </Tooltip>

        {/* Instagram Button */}
        <Tooltip
          id="instagram-tooltip"
          title={`${texts.instagram_tooltip}`}
          placement={'bottom'}
          arrow
          classes={{ tooltip: classes.tooltip }}>
          <Button className={classes.listButton} href={`${texts.instagram_link}`} target={'_blank'}>
            <Instagram className={classes.icons} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
};

export default Component;
