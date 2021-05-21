const {gql} = require('apollo-server');

const typeDefs = gql`

type Query {
    "postsList: contains all of the posts in the server"
    postsList: [Post!]!
    "usersList: contains all of the user information in the server"
    usersList: [User!]!
}
  
type User {

    "id: the unique id of this user, can't be null"
    id: ID!

    "name: the display name, can't be null"
    name: String!

    "joinDate: account registration date, can't be null"
    joinDate: Date!

    "avatar: the url of the profile photo"
    avatar: String

    "pastPosts: an array of the ID of the past posts"
    pastPosts:[ID!]
  }

type Post {

    "id: the unique id of this post, can't be null"
    id: ID!

    "author: the id of the person who posted this, can't be null"
    author: ID!

    "title: the title of this post, can't be null"
    title: String!

    "body: the body of this post"
    body: String

    "date: the time when this post was uploaded" 
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