import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, colors, Theme } from '@material-ui/core'
import { ButtonLink } from '~/atoms/Link'

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {},
    item: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0
    },
    button: {
      color: colors.blueGrey[800],
      padding: '10px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
      fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
      color: theme.palette.icon,
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(1)
    },
    active: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '& $icon': {
        color: theme.palette.primary.main
      }
    }
  }
})

const SidebarNav: React.FC<SidebarNavProps> = props => {
  const { pages, className, ...rest } = props

  const classes = useStyles()

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <ButtonLink
            activeClassName={classes.active}
            className={classes.button}
            to={page.href}>
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </ButtonLink>
        </ListItem>
      ))}
    </List>
  )
}

type SidebarNavProps = {
  className: string
  pages: any[]
}

export default SidebarNav
