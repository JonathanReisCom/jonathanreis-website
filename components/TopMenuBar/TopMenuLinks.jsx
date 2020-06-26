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
// My Components

// Images
import logo from 'assets/images/logo-jonathan-reis-com.png';

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

  const links = {
    github: {
      href: 'https://github.com/JonathanReisCom',
      target: '_blank',
      tooltip: 'Meu Github',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/jonathan-reis-com/',
      target: '_blank',
      tooltip: 'Me siga no LinkedIn',
    },

    instagram: {
      href: 'https://www.instagram.com/jonathanreis/',
      target: '_blank',
      tooltip: 'Me siga no Instagram',
    },
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* LinkedIn Button */}
        <Tooltip
          id="gitHub-tooltip"
          title={links.github.tooltip}
          placement={'top'}
          arrow
          classes={{ tooltip: classes.tooltip }}>
          <Button className={classes.listButton} href={links.github.href} target={links.github.target}>
            <GitHub className={classes.icons} />
          </Button>
        </Tooltip>

        {/* LinkedIn Button */}
        <Tooltip
          id="linkedin-tooltip"
          title={links.linkedin.tooltip}
          placement={'top'}
          arrow
          classes={{ tooltip: classes.tooltip }}>
          <Button className={classes.listButton} href={links.linkedin.href} target={links.linkedin.target}>
            <LinkedIn className={classes.icons} />
          </Button>
        </Tooltip>

        {/* Instagram Button */}
        <Tooltip
          id="instagram-tooltip"
          title={links.instagram.tooltip}
          placement={'top'}
          arrow
          classes={{ tooltip: classes.tooltip }}>
          <Button className={classes.listButton} href={links.instagram.href} target={links.instagram.target}>
            <Instagram className={classes.icons} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
};

export default Component;
