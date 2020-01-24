import { gql } from 'apollo-server-lambda'
const rootTypeDefs = gql`
  type Query {
    hello: String
  }
`

export default rootTypeDefs
