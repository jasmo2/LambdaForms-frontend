import { ThemePalette } from '~/theme/types'
declare module '@material-ui/core/styles/createPalette' {
  interface Palette extends ThemePalette {}
}
