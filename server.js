const express = require('express');
const {ApolloServer} = require('apollo-server-express');

const db = require('./config/connection');
const {typeDefs, resolvers} = require('./schemas');

const PORT = process.env.PORT || 3005;

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.once('open', async () => {
    await server.start();
    server.applyMiddleware({app});

    app.listen(PORT, () => console.log('Server up'));
});
