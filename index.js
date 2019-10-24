const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const schema = gql(`
    type Query{
      olaMundo: String!
    }
`)

const resolvers = {
  Query:{
     olaMundo: () => 'Olá,Mundo! Nossa primeira consulta',
  }
}

const server = new ApolloServer({typeDefs: schema,resolvers})

const app = express()
server.applyMiddleware({app})

app.listen({port:4000}, () => console.log(`Servidor rodando na porta localhost:4000/${server.graphqlPath}`));