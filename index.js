const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query{
      olaMundo: String!
    }
`)

const resolver = {
	olaMundo: () => 'Olá,Mundo! Nossa primeira consulta',
}

graphql(schema, '{olaMundo}', resolver).then(resposta => console.log(resposta))
