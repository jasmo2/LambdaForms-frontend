import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

import Minimal from '~/wrappers/Minimal'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}))

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Minimal>
      <h1>Index Page</h1>
    </Minimal>
  )
}

export default Dashboard
