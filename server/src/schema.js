const {gql} = require('apollo-server');

const typeDefs = gql`

type Query {
    postsList: [Post!]!
    usersList: [User!]!
    commentsList: [Comment!]
}
  
type User {
    id: ID!
    name: String!
    joinDate: Date!
    pastPosts:[ID!]
  }

type Post {
    id: ID!
    author: User!
    title: String!
    body: String
    comment: [ID!]
    date: Date!
}


type Comment {
    id: ID!
    author: ID!
    postid: ID!
    body: String
    date: Date!
}

type Date {
    year: Int!
    month: Int!
    day: Int!
    hour: Int!
    minute: Int!
    second: Int!
}

`;
module.exports = typeDefs;