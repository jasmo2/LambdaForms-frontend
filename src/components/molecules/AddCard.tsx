import React from 'react'
import { navigate } from 'gatsby'
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
    borderRadius: 0,
    margin: 'auto',
    position: 'relative'
  },
  actionArea: {
    backgroundColor: theme.palette.primary.light,
    border: 'dashed',
    borderColor: theme.palette.card.dash,
    borderStyle: 'dashed',
    borderWidth: '1.6px',
    height: '100%'
  },
  box: {
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

const handleRedirection = e => {
  navigate('/form-settings')
}

const AddCard: React.FC<AddCardProps> = React.memo(props => {
  const { className: CN, ...rest } = props

  const classes = useStyles()
  const { actionArea, content, root, box, title, cta } = classes

  return (
    <Card className={clsx(root, CN)}>
      <CardActionArea
        className={clsx(actionArea, CN)}
        onClick={handleRedirection}>
        <CardContent className={clsx(content, CN)}>
          <Box className={box}>
            <i className="material-icons">add_circle_outline</i>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
})

type AddCardProps = {
  className?: string
}

export default AddCard
