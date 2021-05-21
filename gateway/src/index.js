const {ApolloServer} = require('apollo-server');
const {federatedSchema} = require ('@apollo/federation');
const typeDefs = require('./schema');
const {fs}  = require('fs');


const bigSchema = fs('./start.graphql').toString();

// Initialize an ApolloGateway instance and pass it an array of
// your subgraph names and URLs
const gateway = new ApolloGateway({
  serviceList: [
    { name: 'posts', url: 'http://localhost:4001' },
    { name: 'users', url: 'http://localhost:4002' },
  ],
  startBigSchema: bigSchema

});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,
  subscriptions: false,

});

server.listen({port: 4003}).then(({ url }) => {
  console.log(`gateway is running`);
});
