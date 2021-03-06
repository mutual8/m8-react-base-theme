import cardStyles from './styles/card'
import invertColor from './utilities/invertColor'

export default ({
  // Colors

  black = 'hsl(0, 0%, 4%)',
  blackBis = 'hsl(0, 0%, 7%)',
  blackTer = 'hsl(0, 0%, 14%)',
  greyDarker = 'hsl(0, 0%, 21%)',
  greyDark = 'hsl(0, 0%, 29%)',
  grey = 'hsl(0, 0%, 48%)',
  greyLight = 'hsl(0, 0%, 71%)',
  greyLighter = 'hsl(0, 0%, 8%)',
  whiteTer = 'hsl(0, 0%, 96%)',
  whiteBis = 'hsl(0, 0%, 98%)',
  white = 'hsl(0, 0%, 100%)',
  orange = 'hsl(14, 100%, 53%)',
  yellow = 'hsl(48, 100%, 67%)',
  green = 'hsl(141, 71%, 48%)',
  turquoise = 'hsl(171, 100%, 41%)',
  cyan = 'hsl(204, 86%, 53%)',
  blue = 'hsl(217, 71%, 53%)',
  purple = 'hsl(271, 100%, 71%)',
  red = 'hsl(348, 100%, 61%)',

  // Typography

  familySansSerif = 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  familyMonospace = 'monospace',
  renderMode = 'optimizeLegibility',

  size1 = '3rem',
  size2 = '2.5rem',
  size3 = '2rem',
  size4 = '1.5rem',
  size5 = '1.25rem',
  size6 = '1rem',
  size7 = '0.75rem',

  weightLight = '300',
  weightNormal = '400',
  weightMedium = '500',
  weightSemibold = '600',
  weightBold = '700',

  // Responsiveness

  // The container horizontal gap, which acts as the offset for breakpoints
  gap = '64px',
  // 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16
  tablet = '769px',
  // desktop mediaquery min-width: `calc(${gap} + ${desktop} + ${gap})`
  desktop = '960px',
  // widescreen mediaquery min-width: `calc(${gap} + ${widescreen} + ${gap})`
  widescreen = '1152px',
  widescreenEnabled = true,
  // fullHd mediaquery min-width: `calc(${gap} + ${fullHd} + ${gap})`
  fullHd = '1344px',
  fullHdEnabled = true,

  // Miscellaneous

  easing = 'ease-out',
  radiusSmall = '2px',
  radius = '4px',
  radiusLarge = '6px',
  radiusRounded = '290486px',
  speed = '86ms',

  // Flags

  variableColumns = true,

  // To be computed

  background = null,
  blueInvert = null,
  border = null,
  borderHover = null,
  code = null,
  codeBackground = null,
  cyanInvert = null,
  danger = null,
  dangerInvert = null,
  dark = null,
  darkInvert = null,
  familyCode = null,
  familyPrimary = null,
  greenInvert = null,
  info = null,
  infoInvert = null,
  light = null,
  lightInvert = null,
  link = null,
  linkActive = null,
  linkActiveBorder = null,
  linkFocus = null,
  linkFocusBorder = null,
  linkHover = null,
  linkHoverBorder = null,
  linkInvert = null,
  linkVisited = null,
  orangeInvert = null,
  pre = null,
  preBackground = null,
  primary = null,
  primaryInvert = null,
  purpleInvert = null,
  redInvert = null,
  sizeLarge = null,
  sizeMedium = null,
  sizeNormal = null,
  sizeSmall = null,
  success = null,
  successInvert = null,
  text = null,
  textLight = null,
  textStrong = null,
  turquoiseInvert = null,
  warning = null,
  warningInvert = null,
  yellowInvert = null,
}) => {
  const variables = {
    background: background || whiteTer,
    black,
    blackBis,
    blackTer,
    blue,
    blueInvert: blueInvert || invertColor(blue),
    border: border || greyLighter,
    borderHover: borderHover || greyLight,
    code: code || red,
    codeBackground: codeBackground || background || whiteTer,
    cyan,
    cyanInvert: cyanInvert || invertColor(cyan),
    danger: danger || red,
    dangerInvert: dangerInvert || redInvert || invertColor(red),
    dark: dark || greyDarker,
    darkInvert: darkInvert || light || whiteTer,
    desktop,
    easing,
    familyCode: familyCode || familyMonospace,
    familyMonospace,
    familyPrimary: familyPrimary || familySansSerif,
    familySansSerif,
    fullHd,
    fullHdEnabled,
    gap,
    green,
    greenInvert: greenInvert || invertColor(green),
    grey,
    greyDark,
    greyDarker,
    greyLight,
    greyLighter,
    info: info || cyan,
    infoInvert: infoInvert || cyanInvert || invertColor(cyan),
    light: light || whiteTer,
    lightInvert: lightInvert || dark || greyDarker,
    link: link || blue,
    linkActive: linkActive || greyDarker,
    linkActiveBorder: linkActiveBorder || greyDark,
    linkFocus: linkFocus || greyDarker,
    linkFocusBorder: linkFocusBorder || blue,
    linkHover: linkHover || greyDarker,
    linkHoverBorder: linkHoverBorder || greyLight,
    linkInvert: linkInvert || blueInvert || invertColor(blue),
    linkVisited: linkVisited || purple,
    orange,
    orangeInvert: orangeInvert || invertColor(orange),
    pre: pre || text || greyDark,
    preBackground: preBackground || background || whiteTer,
    primary: primary || turquoise,
    primaryInvert: primaryInvert || turquoiseInvert || invertColor(turquoise),
    purple,
    purpleInvert: purpleInvert || invertColor(purple),
    radius,
    radiusLarge,
    radiusRounded,
    radiusSmall,
    red,
    redInvert: redInvert || invertColor(red),
    renderMode,
    size1,
    size2,
    size3,
    size4,
    size5,
    size6,
    size7,
    sizeLarge: sizeLarge || size4,
    sizeMedium: sizeMedium || size5,
    sizeNormal: sizeNormal || size6,
    sizeSmall: sizeSmall || size7,
    speed,
    success: success || green,
    successInvert: successInvert || greenInvert || invertColor(green),
    tablet,
    text: text || greyDark,
    textLight: textLight || grey,
    textStrong: textStrong || greyDarker,
    turquoise,
    turquoiseInvert: turquoiseInvert || invertColor(turquoise),
    variableColumns,
    warning: warning || yellow,
    warningInvert: warningInvert || yellowInvert || invertColor(yellow),
    weightBold,
    weightLight,
    weightMedium,
    weightNormal,
    weightSemibold,
    white,
    whiteBis,
    whiteTer,
    widescreen,
    widescreenEnabled,
    yellow,
    yellowInvert: yellowInvert || invertColor(yellow),

  }

  const theme = {
    getVariable: name => variables[name],

    getAllVariables: () => variables,

    setVariable: (name, value) => {
      variables[name] = value.toString()
      return theme
    },

    m8BaseTheme: {
      ...cardStyles(variables),
    },
  }

  return theme
}
