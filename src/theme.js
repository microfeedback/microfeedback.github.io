/**
 *  Variables and functions shared by styles of multiple components.
 */
const colors = {
  dark: '#282c34',
  darker: '#20232a',
  text: '#1a1a1a',
  subtle: '#6d6d6d',
  subtleOnDark: '#999',
  divider: '#ececec',
  note: '#ffe564',
  white: '#ffffff',
  black: '#000000',
  menu: '#f7f7f7',
  primary: '#3085d6',
  linkHighlight: 'rgba(187, 239, 253, 0.3)',
  linkHighlightHover: 'rgba(187, 239, 253, 1)',
  codeHighlight: 'rgba(255, 229, 100, 0.2)',
};

const SIZES = {
  xsmall: {min: 0, max: 599},
  small: {min: 600, max: 779},
  medium: {min: 780, max: 979},
  large: {min: 980, max: 1279},
  xlarge: {min: 1280, max: 1339},
  xxlarge: {min: 1340, max: Infinity},

  // Sidebar/nav related tweakpoints
  largerSidebar: {min: 1100, max: 1339},
  sidebarFixed: {min: 2000, max: Infinity},
};

const media = {
  between(smallKey, largeKey, excludeLarge = false) {
    if (excludeLarge) {
      return `@media (min-width: ${
        SIZES[smallKey].min
      }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
    }
    if (SIZES[largeKey].max === Infinity) {
      return `@media (min-width: ${SIZES[smallKey].min}px)`;
    }
    return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
      SIZES[largeKey].max
    }px)`;
  },

  greaterThan(key) {
    return `@media (min-width: ${SIZES[key].min}px)`;
  },

  lessThan(key) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`;
  },

  size(key) {
    const size = SIZES[key];

    if (size.min === null) {
      return media.lessThan(key);
    } else if (size.max === null) {
      return media.greaterThan(key);
    }
    return media.between(key, key);
  },
};

const systemUIFont = `-apple-system, BlinkMacSystemFont,
"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
"Fira Sans", "Droid Sans", "Helvetica Neue",
sans-serif`;

const headerFont = `'Raleway', ${systemUIFont}`;

const fonts = {
  brand: {
    fontFamily: headerFont,
    fontWeight: 700,
  },
};

// Shared styles are generally better as components,
// Except when they must be used within nested CSS selectors.
// This is the case for eg markdown content.
const linkStyle = {
  backgroundColor: colors.linkHighlight,
  borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
  color: colors.text,

  ':hover': {
    backgroundColor: colors.linkHighlightHover,
    borderBottomColor: colors.text,
  },
};

const headerHeight = 50;
const headerHeightLg = 60;

const sharedStyles = {
  link: linkStyle,
  header: {
    height: headerHeight,
    [media.greaterThan('large')]: {
      height: headerHeightLg,
    },
  },
  articleLayout: {
    container: {
      display: 'flex',
      minHeight: 'calc(100vh - 60px)',
      [media.greaterThan('sidebarFixed')]: {
        maxWidth: 840,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    content: {
      marginTop: 30,
      marginBottom: 120,

      [media.greaterThan('medium')]: {
        marginTop: 40,
      },
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',

      [media.between('small', 'sidebarFixed')]: {
        borderLeft: '1px solid #ececec',
        marginLeft: 80,
      },

      [media.between('small', 'largerSidebar')]: {
        flex: '0 0 200px',
        marginLeft: 80,
      },

      [media.between('small', 'medium')]: {
        marginLeft: 40,
      },

      [media.greaterThan('largerSidebar')]: {
        flex: '0 0 300px',
      },

      [media.greaterThan('sidebarFixed')]: {
        position: 'fixed',
        right: 0,
        width: 300,
        zIndex: 2,
      },
    },

    editLink: {
      color: colors.subtle,
      borderColor: colors.divider,
      transition: 'all 0.2s ease',
      transitionPropery: 'color, border-color',
      whiteSpace: 'nowrap',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',

      ':hover': {
        color: colors.text,
        borderColor: colors.text,
      },
    },
  },

  markdown: {
    '& .gatsby-highlight': {
      marginTop: 25,
      marginLeft: -30,
      marginRight: -30,
      marginBottom: 25,
      paddingLeft: 15,
      paddingRight: 15,

      [media.lessThan('small')]: {
        marginLeft: -20,
        marginRight: -20,
        borderRadius: 0,
      },
    },

    '& a:not(.anchor):not(.gatsby-resp-image-link)': linkStyle,

    '& > p:first-child': {
      fontSize: '1.1em',
      fontWeight: 300,
      marginBottom: '1.8rem',
      fontFamily: headerFont,
      color: colors.subtle,

      [media.greaterThan('xlarge')]: {
        fontSize: '1.3em',
      },

      '& a, & strong': {
        fontWeight: 400,
      },
    },

    '& p': {
      marginTop: 20,
      maxWidth: '42em',

      '&:first-of-type': {
        marginTop: 15,
      },

      '&:first-child': {
        marginTop: 0,
      },

      [media.lessThan('large')]: {
        marginTop: 15,
      },
    },

    '& h3 + p, & h3 + p:first-of-type': {
      marginTop: 20,
    },

    '& p > code, & li > code': {
      background: colors.codeHighlight,
      color: colors.text,
    },

    '& p > code, & li > code, & p > a > code, & li > a > code': {
      padding: '0 3px',
      fontSize: '1em',
      wordBreak: 'break-word',
    },

    '& hr': {
      height: 1,
      marginBottom: -1,
      border: 'none',
      borderBottom: `1px solid ${colors.divider}`,
      marginTop: 40,

      ':first-child': {
        marginTop: 0,
      },
    },

    '& h2': {
      borderTop: `1px solid ${colors.divider}`,
      marginTop: 44,
      paddingTop: 40,

      ':first-child': {
        borderTop: 0,
        marginTop: 0,
        paddingTop: 0,
      },
    },

    '& hr + h2': {
      borderTop: 0,
      marginTop: 0,
    },

    '& h2 + h3, & h2 + h3:first-of-type': {
      paddingTop: '0.75em',
    },

    '& ol, & ul': {
      marginTop: 20,
      color: colors.text,
      paddingLeft: 20,

      '& p, & p:first-of-type': {
        marginTop: 0,
        lineHeight: 1.2,
      },

      '& li': {
        marginTop: 15,
      },

      '& ol, & ul': {
        marginLeft: 20,
      },
    },

    '& img': {
      maxWidth: '100%',
    },
  },
};

sharedStyles.fluid = {
  minHeight: `calc(100vh - ${headerHeight}px)`,
  marginTop: 50,
  [media.greaterThan('large')]: {
    minHeight: `calc(100vh - ${headerHeightLg}px)`,
    marginTop: 60,
  },
  '@media (min-height: 900px)': {
    minHeight: '930px',
  },
};

export {colors, fonts, media, sharedStyles};
