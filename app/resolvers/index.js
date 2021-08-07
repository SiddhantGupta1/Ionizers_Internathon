import { gql } from "apollo-server-express";
import * as db from "./../database";

export const typeDefs = gql`
  extend type Query {
    # filesDataAPI: [APISchema]!
    testAPI: testSchema!
  }
  type testSchema {
    status: Int!
  }
`;
export const resolvers = {
  Query: {
    testAPI: async (obj, args, context, info) => {
      return {
        status: 200,
      };
    },
  },
};
