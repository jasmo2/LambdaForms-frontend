import { createMuiTheme } from '@material-ui/core'

import palette from '~/theme/palette'
import typography from '~/theme/typography'
import overrides from '~/overrides/index'

const theme = createMuiTheme({
  overrides,
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
})
console.log('TCL: theme', theme)

export default theme
