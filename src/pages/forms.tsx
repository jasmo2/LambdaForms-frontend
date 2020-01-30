import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Main from '~/wrappers/Main'
import FormCard from '~/components/molecules/FormCard'
import AddCard from '~/components/molecules/AddCard'
// import {
//   Budget,
//   TotalUsers,
//   TasksProgress,
//   TotalProfit,
//   LatestSales,
//   UsersByDevice,
//   LatestProducts,
//   LatestOrders
// } from '~/components'

const CardSize = '260px'
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  addForm: {
    alignItems: 'center',
    border: '1px dashed rgba(0, 0, 0, 0.12)',
    borderRadius: '4px',
    justifyContent: 'center',
    transition:
      'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  cardContainer: {
    display: 'flex'
  },
  card: {
    height: CardSize,
    width: CardSize
  }
}))

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Main>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid
            className={classes.cardContainer}
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}>
            <AddCard className={classes.card} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <FormCard className={classes.card} />
          </Grid>
        </Grid>
      </div>
    </Main>
  )

  //   return (
  //     <div className={classes.root}>
  //       <Grid container spacing={4}>
  //         <Grid item lg={3} sm={6} xl={3} xs={12}>
  //           <Budget />
  //         </Grid>
  //         <Grid item lg={3} sm={6} xl={3} xs={12}>
  //           <TotalUsers />
  //         </Grid>
  //         <Grid item lg={3} sm={6} xl={3} xs={12}>
  //           <TasksProgress />
  //         </Grid>
  //         <Grid item lg={3} sm={6} xl={3} xs={12}>
  //           <TotalProfit />
  //         </Grid>
  //         <Grid item lg={8} md={12} xl={9} xs={12}>
  //           <LatestSales />
  //         </Grid>
  //         <Grid item lg={4} md={6} xl={3} xs={12}>
  //           <UsersByDevice />
  //         </Grid>
  //         <Grid item lg={4} md={6} xl={3} xs={12}>
  //           <LatestProducts />
  //         </Grid>
  //         <Grid item lg={8} md={12} xl={9} xs={12}>
  //           <LatestOrders />
  //         </Grid>
  //       </Grid>
  //     </div>
  //   )
}

export default Dashboard

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
