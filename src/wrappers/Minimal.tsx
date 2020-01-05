import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Topbar from '~/molecules/Topbar'

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    height: '100%'
  }
}))

const Minimal: React.FC<MinimalProps> = props => {
  const { children } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  )
}

type MinimalProps = {
  children?: React.ReactNode
  className?: string
}

export default Minimal
