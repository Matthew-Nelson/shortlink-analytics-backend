const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Url {
    id: ID!
    long_url: String!
    short_id: String!
    custom_id: String
    created_at: String!
    updated_at: String!
    clicks: [Click]
  }

  type Click {
    id: ID!
    url_id: ID!
    timestamp: String!
    location: String
    referrer: String
  }

  type Query {
    urls: [Url]
    url(short_id: String!): Url
    clicks(url_id: ID!): [Click]
  }

  type Mutation {
    shortenUrl(long_url: String!, custom_id: String): Url
  }
`;

module.exports = typeDefs;
