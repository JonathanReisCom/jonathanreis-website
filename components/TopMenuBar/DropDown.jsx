import React from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Popper from '@material-ui/core/Popper';

// core components
import { ButtonBase, CustomLink } from 'components/Links';

// Style
import theme from 'components/Theme';
const localStyle = {
  popperClose: {
    pointerEvents: 'none',
  },
  pooperNav: {
    [theme.breakpoints.down('sm')]: {
      position: 'static !important',
      left: 'unset !important',
      top: 'unset !important',
      transform: 'none !important',
      willChange: 'none !important',
      '& > div': {
        boxShadow: 'none !important',
        marginLeft: '1.5rem',
        marginRight: '1.5rem',
        transition: 'none !important',
        marginTop: '0px !important',
        marginBottom: '5px !important',
        padding: '0px !important',
      },
    },
  },
  popperResponsive: {
    zIndex: '1200',
    position: 'absolute !important',
    [theme.breakpoints.down('sm')]: {
      zIndex: '1640',
      position: 'static !important',
      float: 'none',
      width: 'auto',
      marginTop: '0',
      backgroundColor: 'transparent',
      border: '0',
      boxShadow: 'none',
      color: 'black',
    },
  },
  menuList: {
    padding: '0',
  },
  dropdown: {
    borderRadius: '3px',
    border: '0',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
    top: '100%',
    zIndex: '1000',
    minWidth: '160px',
    padding: '5px 0',
    margin: '2px 0 0',
    fontSize: '14px',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
  },
  dropdownItem: {
    // ...defaultFont,
    fontSize: '13px',
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '2px',
    position: 'relative',
    transition: 'all 150ms linear',
    display: 'block',
    clear: 'both',
    fontWeight: '400',
    height: 'fit-content',
    color: '#333',
    whiteSpace: 'nowrap',
    minHeight: 'unset',
  },
  dropdownItemRTL: {
    textAlign: 'right',
  },
  dropdownDividerItem: {
    margin: '5px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    height: '1px',
    overflow: 'hidden',
  },
  dropdownHeader: {
    display: 'block',
    padding: '0.1875rem 1.25rem',
    fontSize: '0.75rem',
    lineHeight: '1.428571',
    color: '#777',
    whiteSpace: 'nowrap',
    fontWeight: 'inherit',
    marginTop: '10px',
    minHeight: 'unset',
    '&:hover,&:focus': {
      backgroundColor: 'transparent',
      cursor: 'auto',
    },
  },
  noLiPadding: {
    padding: '0',
  },
  buttonIcon: {
    width: '20px',
    height: '20px',
  },
  caret: {
    transition: 'all 150ms ease-in',
    display: 'inline-block',
    width: '0',
    height: '0',
    marginLeft: '4px',
    verticalAlign: 'middle',
    borderTop: '4px solid',
    borderRight: '4px solid transparent',
    borderLeft: '4px solid transparent',
  },
  caretActive: {
    transform: 'rotate(180deg)',
  },
  caretRTL: {
    marginRight: '4px',
  },
  // Hover Colors
  blackHover: {
    '&:hover': {
      backgroundColor: '#212121',
      color: '#FFFFFF',
      boxShadow: theme.shadows[5],
    },
  },
  primaryHover: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
      boxShadow: theme.shadows[5],
    },
  },
  // infoHover: {
  //   '&:hover': {
  //     backgroundColor: infoColor,
  //     color: '#FFFFFF',
  //     ...infoBoxShadow,
  //   },
  // },
  // successHover: {
  //   '&:hover': {
  //     backgroundColor: successColor,
  //     color: '#FFFFFF',
  //     ...successBoxShadow,
  //   },
  // },
  // warningHover: {
  //   '&:hover': {
  //     backgroundColor: warningColor,
  //     color: '#FFFFFF',
  //     ...warningBoxShadow,
  //   },
  // },
  // dangerHover: {
  //   '&:hover': {
  //     backgroundColor: dangerColor,
  //     color: '#FFFFFF',
  //     ...dangerBoxShadow,
  //   },
  // },
  // roseHover: {
  //   '&:hover': {
  //     backgroundColor: roseColor,
  //     color: '#FFFFFF',
  //     ...roseBoxShadow,
  //   },
  // },
};
const useStyles = makeStyles(localStyle);

const Dropdown = React.forwardRef(
  (
    {
      buttonText,
      ButtonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      left,
      rtlActive,
      noLiPadding,
      navDropdown,
      onOpen,
      ...props
    },
    ref
  ) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      if (anchorEl && anchorEl.contains(event.target)) {
        // Click for close
        setAnchorEl(null);
        if (onOpen) onOpen(false, false);
      } else {
        // Click for open
        setAnchorEl(event.currentTarget);
        if (onOpen) onOpen(false, true);
      }
    };
    const handleClose = (param) => {
      setAnchorEl(null);
      if (props && props.onClick) {
        props.onClick(param);
      }
      if (onOpen) onOpen(false, false);
    };
    const handleCloseAway = (event) => {
      if (anchorEl.contains(event.target)) {
        return;
      }
      setAnchorEl(null);
      if (onOpen) onOpen(false, false);
    };

    const caretClasses = classNames({
      [classes.caret]: true,
      [classes.caretActive]: Boolean(anchorEl),
      [classes.caretRTL]: rtlActive,
    });
    const dropdownItem = classNames({
      [classes.dropdownItem]: true,
      [classes[hoverColor + 'Hover']]: true,
      [classes.noLiPadding]: noLiPadding,
      [classes.dropdownItemRTL]: rtlActive,
    });
    let icon = null;
    switch (typeof ButtonIcon) {
      case 'object':
        icon = <ButtonIcon className={classes.buttonIcon} />;
        break;
      case 'string':
        icon = <Icon className={classes.buttonIcon}>{ButtonIcon}</Icon>;
        break;
      default:
        icon = null;
        break;
    }
    return (
      <ButtonBase
        ref={ref}
        onClick={handleClick}
        // {...buttonProps}
        {...props}>
        {icon}
        {buttonText !== undefined ? buttonText : null}
        {caret ? <b className={caretClasses} /> : null}
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          transition
          disablePortal
          placement={dropup ? (left ? 'top-start' : 'top') : left ? 'bottom-start' : 'bottom'}
          className={classNames({
            [classes.popperClose]: !anchorEl,
            [classes.popperResponsive]: true,
            [classes.pooperNav]: Boolean(anchorEl) && navDropdown,
          })}>
          {() => (
            <Grow
              in={Boolean(anchorEl)}
              id="menu-list"
              style={dropup ? { transformOrigin: '0 100% 0' } : { transformOrigin: '0 0 0' }}>
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleCloseAway}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        onClick={() => handleClose(dropdownHeader)}
                        className={classes.dropdownHeader}>
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={() => handleClose('divider')}
                            className={classes.dropdownDividerItem}
                          />
                        );
                      }
                      return (
                        <MenuItem key={key} onClick={() => handleClose(prop)} className={dropdownItem}>
                          {prop}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ButtonBase>
    );
  }
);

export default Dropdown;
