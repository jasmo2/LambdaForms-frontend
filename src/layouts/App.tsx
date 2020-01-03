import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Helmet from 'react-helmet'

import './index.css'
import theme from '~/theme/base'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any
}

const App = props => {
  console.log('TCL: App -> props', props)
  console.log('TCL: App -> theme', theme)
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Material Gatsby</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Material UI template to integrate directly with Gatsby"
        />
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async></script>
      </Helmet>
      {props.children}
    </ThemeProvider>
  )
}

export default App
