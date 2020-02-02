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

import Main from '~/wrappers/Main'
import useStyles from '~/layouts/forms.styles'

const schema = {
  'form name': {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 64
    }
  }
}

const Form: React.FC<Props> = props => {
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

  const handleForm = event => {
    event.preventDefault()
    navigate('/')
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false

  return (
    <Main>
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.content} item xs={12}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton onClick={handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form} onSubmit={handleForm}>
                  <Typography className={classes.title} variant="h2">
                    Create a New Form
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Add descriptive name for your forms
                  </Typography>
                  <TextField
                    className={classes.textField}
                    error={hasError('form name')}
                    fullWidth
                    helperText={
                      hasError('form name')
                        ? formState.errors['form name'][0]
                        : null
                    }
                    label="Form Name"
                    name="form name"
                    onChange={handleChange}
                    type="text"
                    value={formState.values['form name'] || ''}
                    variant="outlined"
                  />

                  <Button
                    className={classes.submitButton}
                    color="primary"
                    disabled={!formState.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained">
                    Create Form
                  </Button>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Main>
  )
}

type Props = {
  history?: object
}

interface Inputs {
  'form name': string
}
interface FormProps {
  isValid: boolean
  values: Inputs
  touched: Inputs
  errors: Inputs
}

export default Form
