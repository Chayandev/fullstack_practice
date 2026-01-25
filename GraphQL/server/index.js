import { ApolloServer } from "apollo-server";
import { startStandaloneServer } from "@apollo/server/standalone";

// server setup
const server = new ApolloServer({
    //typeDefs- defination of tyeps of data ex:user/author, we expose to graph, which clinet query on.
     

    //resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
