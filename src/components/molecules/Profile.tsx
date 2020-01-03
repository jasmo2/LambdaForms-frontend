import React from 'react'
import clsx from 'clsx'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { AvatarLink } from '~/atoms/Link'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}))

const Profile: React.FC<ProfileProps> = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  const user = {
    name: 'Shen Zhi',
    avatar: '/static/avatars/avatar_11.png',
    bio: 'Brain Director'
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <AvatarLink
        alt="Person"
        className={classes.avatar}
        src={user.avatar}
        to="/settings"
      />

      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  )
}

type ProfileProps = {
  className?: string
}

export default Profile
