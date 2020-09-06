import Typography from "typography"
//import gray from "gray-percentage"

const typography = new Typography({
  title: 'amaNekublog theme',
  baseFontSize: '16px',
  baseLineHeight: 1.70,
  scaleRatio: 2.10,
  googleFonts: [
    {
      name: 'M+PLUS+Rounded+1c',
      styles: ['400'],
    },
    {
      name: 'Noto+Sans+JP',
      styles: ['400'],
    },
  ],
  headerFontFamily: [
    "M PLUS Rounded 1c",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Noto Sans JP",
    "sans-serif",
  ],
  headerColor: "hsl(210,50%,20%)",
  bodyColor: "hsl(210,50%,25%)",
  headerWeight: `bold`,
  bodyWeight: `normal`,
  boldWeight: `bold`,
  blockMarginBottom: 1,
  includeNormalize: true,
  overrideStyles: ({ scale, rhythm }, options, styles) => ({
    'h1': {
      letterSpacing: '0.08em',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.20,
      marginBottom: '1.0rem',
    },
    p: {
      textAlign: 'justify',
      wordBreak: 'break-all',
    },
    a: {
      textDecoration: "none",
      color: "#0073bc",
    },
    "a:hover": {
      textDecoration: "underline",
      color: "#33CCFF",
    },
    'li': {
      marginBottom: '0px',
    },
    hr: {
      marginBottom: '1.0rem'
    },
    "pre[class*='language-']": {
      margin: '0 0 1.7rem !important',
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
