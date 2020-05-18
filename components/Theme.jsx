import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const colors = {
  text: {
    primary: '#3C4858',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    menubar: '#fff',
  },
  primaryColor: '#9DCCEF',
  backgroundPaperColor: '#fff',
  // NOT IN USE
  warningColor: '#ff9800',
  dangerColor: '#f44336',
  successColor: '#4caf50',
  infoColor: '#00acc1',
  roseColor: '#e91e63',
  grayColor: '#999999',
};

const gradients = {
  gradients: {
    black: 'radial-gradient(ellipse at center, #585858 0, #000 100%)',
    blackLinear: '-webkit-linear-gradient(#585858, #000)',
    blackRadial: 'radial-gradient(#9DCCEF, #585858)',
    orange: '-webkit-linear-gradient(#fde04c, #ffc900)',
  },
};
// breakpoints: Object
// keys: Array(5)
// 0: "xs"
// 1: "sm"
// 2: "md"
// 3: "lg"
// 4: "xl"
// values: Object
// xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920

const sizes = {
  typography: {
    lineHeight: '1.4',
    // FONT SIZES
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
    button: '0.65rem',
    body1: '1rem',
    body2: '0.875rem',
  },
  position: {
    subSectionPadding: 50,
    sectionOverSize: 70,
    defaultGutter: 24,
  },
};

const typography = {
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: sizes.typography.h1,
      fontWeight: '300',
      lineHeight: `calc(${sizes.typography.h1} * ${sizes.typography.lineHeight})`,
    },
    h2: {
      fontSize: sizes.typography.h2,
      fontWeight: '300',
      lineHeight: `calc(${sizes.typography.h2} * ${sizes.typography.lineHeight})`,
    },
    h3: {
      fontSize: sizes.typography.h3,
      fontWeight: '300',
      lineHeight: `calc(${sizes.typography.h3} * ${sizes.typography.lineHeight})`,
    },
    h4: {
      fontSize: sizes.typography.h4,
      fontWeight: '300',
      lineHeight: `calc(${sizes.typography.h4} * ${sizes.typography.lineHeight})`,
    },
    h5: {
      fontSize: sizes.typography.h5,
      fontWeight: '300',
      lineHeight: `calc(${sizes.typography.h5} * ${sizes.typography.lineHeight})`,
    },
    h6: {
      fontSize: sizes.typography.h6,
      fontWeight: '300',
      lineHeight: `calc(${sizes.typography.h6} * ${sizes.typography.lineHeight})`,
    },
    button: {
      fontSize: sizes.typography.button,
    },
    body1: {
      fontSize: sizes.typography.body1,
      fontWeight: '300',
      lineHeight: `calc(${sizes.typography.body1} * ${sizes.typography.lineHeight})`,
    },
    body2: {
      fontSize: sizes.typography.body2,
      fontWeight: '300',
      lineHeight: `calc(${sizes.typography.body2} * ${sizes.typography.lineHeight})`,
    },
  },
};

const muiTooltip = {
  MuiTooltip: {
    tooltip: {
      padding: '10px 15px',
      textAlign: 'center',
      fontSize: sizes.typography.button,
      minWidth: '130px',
      color: colors.text.primary,
      lineHeight: '1.7em',
      backgroundColor: colors.backgroundPaperColor,
      border: 'none',
      borderRadius: '3px',
      boxShadow:
        '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
      maxWidth: '200px',
    },
    arrow: {
      color: colors.backgroundPaperColor,
    },
  },
};

const muiGrid = {
  MuiGrid: {
    item: {
      padding: '0.5rem',
    },
  },
};

// Create a theme instance.
const theme = createMuiTheme({
  container: {
    backgroundColor: 'red',
  },
  ...typography,
  ...gradients,
  sizes: { ...sizes.position },
  palette: {
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: colors.backgroundPaperColor,
      default: '#eee',
    },
    text: colors.text,
  },
  overrides: {
    ...muiTooltip,
    ...muiGrid,
  },
});

export default theme;
