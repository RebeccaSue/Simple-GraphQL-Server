const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');
const {federatedSchema} = require ('@apollo/federation');
const typeDefs = require('./schema');
const {fs}  = require('fs');
const {postsData} = require('../data/post.json');


const gateway = new ApolloGateway({
    serviceList: [
        { name: 'users', url: 'http://localhost:4001' },
        // Define additional services here
      ],
});


const resolvers = {
    Query: { 
        fetchAllPosts() {
            return postsData;
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

server.listen({port: 4001}).then(() => {
    console.log(`
      Please choose one of the options:

        - Print all of the post information
            enter fetch-all-posts

        - Print a post's information
            enter "user:" + the id of the post
            for example: post:asfagsdf-sga-asdf-9382-sadcaserfewa1wea
    `);

  });