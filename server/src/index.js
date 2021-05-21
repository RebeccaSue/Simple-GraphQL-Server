const {ApolloServer, MockList} = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
    Query: () => ({
        postsList: () => new MockPostList([]), 
        usersList: () => new MockUsersList([]),
        commentsList: () => new MockCommentsList([]),
    })

}


const server = new ApolloServer({
    typeDefs,
    mocks: true
});

server.listen().then(() => {
    console.log(`
      Testing...
    `);
  });