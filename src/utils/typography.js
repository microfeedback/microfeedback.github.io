import Typography from 'typography';

const systemUIFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
];

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  scaleRatio: 2.5,
  headerFontFamily: ['Raleway'].concat(systemUIFont),
  bodyFontFamily: systemUIFont,
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        '300',
        '700',
      ],
    },
  ],
  // Workaround for https://github.com/KyleAMathews/typography.js/issues/148
  overrideStyles: () => ({
    html: {
      lineHeight: 1.6,
    },
  }),
});

export default typography;
