const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const { countyQueries, countyMutations } = require('./resolvers');
const { countyTypes } = require('./types');

const County = require('./models/County');

exports.createApolloServer = () => {
  const typeDefs = gql`
    ${countyTypes}

    type Query {
      county(id: ID): County
      counties: [County]
    }
    type Mutation {
      createCounty(input: CountyInput): County
      updateCounty(id: ID, input: CountyInput): County
      deleteCounty(id: ID): ID
    }
  `;
  const resolvers = {
    Query: {
      ...countyQueries,
    },
    Mutation: {
      ...countyMutations,
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      models: {
        County: new County(mongoose.model('County')),
      },
    }),
  });
  return apolloServer;
};
