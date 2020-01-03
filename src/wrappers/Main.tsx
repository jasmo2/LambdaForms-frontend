import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

import Sidebar from '~/components/molecules/Sidebar'
import Topbar from '~/components/molecules/Topbar'
import Footer from '~/components/atoms/Footer'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}))

const Main: React.FC<MainProps> = props => {
  const { children } = props

  const classes = useStyles()
  const theme: Theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }
  const shouldOpenSidebar = isDesktop ? true : openSidebar

  const className = clsx({
    [classes.root]: true,
    [classes.shiftContent]: isDesktop
  })
  return (
    <div className={className}>
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  )
}
type MainProps = {
  children: any
}

export default Main
