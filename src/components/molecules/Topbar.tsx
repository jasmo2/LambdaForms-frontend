import React, { useState } from 'react'
import Link from 'gatsby-link'
import clsx from 'clsx'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}))

const Topbar: React.FC<TopbarProps> = props => {
  const { className, onSidebarOpen, ...rest } = props

  const classes = useStyles()

  const [notifications] = useState([])

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <Link to="/">
          <img alt="Logo" src={'/logos/logo--white.svg'} />
        </Link>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={() => onSidebarOpen!()}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

type TopbarProps = {
  className?: string
  onSidebarOpen?: Function
}

export default Topbar
