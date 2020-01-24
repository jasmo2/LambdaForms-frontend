import typeDefs from './schema'
import resolvers from './resolvers'

import { ApolloServer } from 'apollo-server-lambda'
import connection from '~/dbconfig'
require('dotenv').config()

connection()
const isDev = process.env.ENV_DEVELOPMENT === 'development'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: isDev,
  playground: isDev
})

export const handler = server.createHandler()
