const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const schema = gql(`
    type Query{
      olaMundo: String!
    }
`)

const resolvers = { // Retorno dos dados
  Query:{
     olaMundo: () => 'Olá,Mundo! Nossa primeira consulta',
  }
}

const server = new ApolloServer({typeDefs: schema,resolvers})

const app = express()
server.applyMiddleware({app})

// Inicialização do Servidor e definição de rota
app.listen({port:4000}, () => console.log(`Servidor rodando na porta localhost:4000/${server.graphqlPath}`));


/*

Resolvers é uma função que o GraphQL utiliza para buscar o que esta no tipo.

*/
 
 