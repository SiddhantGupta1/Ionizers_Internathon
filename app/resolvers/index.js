import { gql } from "apollo-server-express";
import * as db from "./../database";
var aws = require("aws-sdk");
var bcrypt = require("bcryptjs");

aws.config.update({
  secretAccessKey: "/hSqYJI9NnDxLA0Kq1EJ+zwZRg1KiIEwzNkxBCgv",
  accessKeyId: "AKIAUFJNEO36NCF3U5FV",
  region: "ap-south-1",
});

export const typeDefs = gql`
  extend type Query {
    createUser(input: data): String!
  }
  input data {
    fname: String!
    lname: String!
    email: String!
    username: String!
    password: String!
  }
`;
export const resolvers = {
  Query: {
    createUser: async (obj, args, context, info) => {
      var data = JSON.parse(JSON.stringify(args.input));
      const salt = await bcrypt.genSalt(13);
      const hashedPassword = await bcrypt.hash(data.password, salt);
      var input = await db.user.create({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        username: data.username,
        password: hashedPassword,
      });
      //console.log(input);
      return "user created";
    },
  },
};
