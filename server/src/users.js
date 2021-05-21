const {ApolloServer} = require('apollo-server');
const {federatedSchema} = require ('@apollo/federation');
const typeDefs = require('./schema');
const {fs}  = require('fs');
const {postsData} = require('../data/user.json');

const resolvers = {
    Query: { 
        fetchAllUsers() {
            return postsData;
        },
        fetchUser(_, { id }) {
            const found = usersData.find(element => element.id === id);
            return found;
        }
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port: 4002}).then(() => {
    console.log(`
      Please choose one of the options:

        - Print all of the user information
            enter fetch-all-user

        - Print a user's information
            enter "user:" + the id of the post
            for example: user:asfagsdf-sga-asdf-9382-sadcaserfewa1wea
    `);

  });