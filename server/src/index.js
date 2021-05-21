const {ApolloServer, MockList} = require('apollo-server');
const typeDefs = require('./schema');
const { readFileSync } = require('fs');

const mocks = {
    Query: () => ({
        postsList: () => new MockPostList([]), 
        usersList: () => new MockUsersList([]),
        commentsList: () => new MockCommentsList([]),
    })

}


const server = new ApolloServer({
    // Subscriptions are not currently supported in Apollo Federation
    subscriptions: false,
    typeDefs,
    mocks: true
});

server.listen().then(() => {
    console.log(`
      Please choose one of the options:

        - Print all of the user information
            enter "fetch-all-users"

        - Print all of the post information
            enter "fetch-all-posts"

        - Print a user's information
            enter "user:" + the id of the user
            for example: users:18f17c7b-bb10-4081-8e2b-16b424d2b3b9

        - Print a post's information
            enter "user:" + the id of the post
            for example: post:asfagsdf-sga-asdf-9382-sadcaserfewa1wea
    `);
  });