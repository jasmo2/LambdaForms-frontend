import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Helmet from 'react-helmet'

import './index.css'
import theme from '~/theme/base'

import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
const uri =
  process.env.GATSBY_ENV_DEVELOPMENT === 'development'
    ? process.env.GATSBY_URL_DEVELOPMENT
    : process.env.GATSBY_URL_PRODUCTION

const createApolloClient = () => {
  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
  })

  return client
}

const App = props => {
  return (
    <ApolloProvider client={createApolloClient()}>
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
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto+Slab|Roboto:300,400,500,700"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
            async></script>
        </Helmet>
        {props.children}
      </ThemeProvider>
    </ApolloProvider>
  )
}
interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

export default App
