const {gql} = require('apollo-server');

const typeDefs = gql`

type Query {
    postsList: [Post!]!
    usersList: [User!]!
    commentsList: [Comment!]
}
  
type User {

    "id: the unique id of this user, can't be null"
    id: ID!

    "name: the display name, can't be null"
    name: String!

    "joinDate: the registered date"
    joinDate: Date!

    "avatar: the url of the profile photo"
    avatar: String

    "pastPosts: an array of the ID of the past posts"
    pastPosts:[ID!]
  }

type Post {

    "id: the unique id of this post, can't be null"
    id: ID!

    "author: the person who posted this, can't be null"
    author: User!

    "title: the title of this post, can't be null"
    title: String!

    "body: the body of this post"
    body: String

    "comment: an array of the ID of the comment of this post"
    comment: [ID!]
    
    "date: the time when this post was uploaded" 
    date: Date!
}


type Comment {

    "id: the unique id of this comment, can't be null"
    id: ID!

    "author: the person who posted this, can't be null"
    author: ID!

    "postid: the id indicates which post this comment belongs to, can't be null"
    postid: ID!

    "body: the body of this comment"
    body: String

    "date: the time when this comment was uploaded"
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