const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');
const {federatedSchema} = require ('@apollo/federation');
const typeDefs = require('./schema');
const {fs}  = require('fs');
const {usersData} = require('../data/user.json');
const {postsData} = require('../data/post.json');


const gateway = new ApolloGateway({

});


const resolvers = {
    Query: {
        fetchAllUsers() {
            return usersData;
        },    
        fetchAllPosts() {
            return postsData;
        },
        fetchUser(_, { id }) {
            const found = usersData.find(element => element.id === id);
            return found;
        }, 
        fetchPost(_, { id }) {
            const found = postsData.find(element => element.id === id);
            return found;
        }
    }

}

const server = new ApolloServer({
    typeDefs
});

server.listen().then(() => {
    console.log(`
      Please choose one of the options:

        - Print all of the user information
            enter fetch-all-users

        - Print all of the post information
            enter fetch-all-posts

        - Print a user's information
            enter "user:" + the id of the user
            for example: users:18f17c7b-bb10-4081-8e2b-16b424d2b3b9

        - Print a post's information
            enter "user:" + the id of the post
            for example: post:asfagsdf-sga-asdf-9382-sadcaserfewa1wea
    `);

  });