import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardContent,
  Typography,
  Theme,
  CardActionArea,
  Box
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 'auto',
    borderRadius: 0,
    position: 'relative'
  },
  actionArea: {
    height: '100%',
    backgroundColor: theme.palette.primary.light
  },
  box: {
    backgroundColor: 'red',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    textAlign: 'center'
  },
  content: {
    padding: 24
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: theme.palette.white,
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12
  },
  title: {
    color: theme.palette.white,
    letterSpacing: '2px'
  }
}))

const AddCard = props => {
  const { className: CN, ...rest } = props

  const classes = useStyles()
  const { actionArea, content, root, box, title, cta } = classes

  return (
    <Card className={clsx(root, CN)}>
      <CardActionArea className={clsx(actionArea, CN)}>
        <CardContent className={clsx(content, CN)}>
          <Box className={box}>
            <i className="material-icons">add_circle_outline</i>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

type AddCard = {
  className?: string
}

export default AddCard
