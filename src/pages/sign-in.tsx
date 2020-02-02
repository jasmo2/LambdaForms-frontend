import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby-theme-material-ui'
import { isUndefined } from 'lodash'
import { navigate } from 'gatsby'
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import validate from 'validate.js'

import Minimal from '~/wrappers/Minimal'
import { FacebookIcon, GoogleIcon } from '~/atoms/Icons'
import useStyles from '~/layouts/forms.styles'

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
}

const SignIn: React.FC<SignInProps> = props => {
  const { history } = props

  const classes = useStyles()

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  } as FormProps)

  useEffect(() => {
    const errors = validate(formState.values, schema)

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }))
  }, [formState.values])

  const handleBack = props => {
    if (!isUndefined(window)) {
      window.history.back()
    }
  }

  const handleChange = event => {
    event.persist()

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }))
  }

  const handleSignIn = event => {
    event.preventDefault()
    navigate('/')
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false

  return (
    <Minimal>
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.quoteContainer} item lg={5}>
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography className={classes.quoteText} variant="h1">
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
                </Typography>
                <div className={classes.person}>
                  <Typography className={classes.name} variant="body1">
                    Takamaru Ayako
                  </Typography>
                  <Typography className={classes.bio} variant="body2">
                    Manager at inVision
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton onClick={handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form} onSubmit={handleSignIn}>
                  <Typography className={classes.title} variant="h2">
                    Sign in
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Sign in with social media
                  </Typography>
                  <Grid className={classes.socialButtons} container spacing={2}>
                    <Grid item>
                      <Button
                        color="primary"
                        onClick={handleSignIn}
                        size="large"
                        variant="contained">
                        <FacebookIcon className={classes.socialIcon} />
                        Login with Facebook
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={handleSignIn}
                        size="large"
                        variant="contained">
                        <GoogleIcon className={classes.socialIcon} />
                        Login with Google
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography
                    align="center"
                    className={classes.sugestion}
                    color="textSecondary"
                    variant="body1">
                    or login with email address
                  </Typography>
                  <TextField
                    className={classes.textField}
                    error={hasError('email')}
                    fullWidth
                    helperText={
                      hasError('email') ? formState.errors.email[0] : null
                    }
                    label="Email address"
                    name="email"
                    onChange={handleChange}
                    type="text"
                    value={formState.values.email || ''}
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textField}
                    error={hasError('password')}
                    fullWidth
                    helperText={
                      hasError('password') ? formState.errors.password[0] : null
                    }
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={formState.values.password || ''}
                    variant="outlined"
                  />
                  <Button
                    className={classes.SubmitButton}
                    color="primary"
                    disabled={!formState.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained">
                    Sign in now
                  </Button>
                  <Typography color="textSecondary" variant="body1">
                    Don't have an account?{' '}
                    <Link to="/sign-up" variant="h6">
                      Sign up
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Minimal>
  )
}

type SignInProps = {
  history?: object
}

interface Inputs {
  password: string
  email: string
}
interface FormProps {
  isValid: boolean
  values: Inputs
  touched: Inputs
  errors: Inputs
}

export default SignIn
