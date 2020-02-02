import { colors } from '@material-ui/core'

const white = '#FFFFFF'
const black = '#000000'

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    light: colors.indigo[100],
    main: colors.indigo[500]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400']
  },
  card: {
    dash: colors.indigo[800]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    light: colors.green[400],
    main: colors.green[600]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    light: colors.blue[400],
    main: colors.blue[600]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    light: colors.orange[400],
    main: colors.orange[600]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    light: colors.red[400],
    main: colors.red[600]
  },
  text: {
    link: colors.blue[600],
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: colors.grey[200],
  icon: colors.blueGrey[600]
}
