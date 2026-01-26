import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";
// defining resolvers
const resolvers = {
  Query: {
    // this are the resolver entry points which map to the graph entry points defined in schema.js
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    game(_, args) {
      // this varibles are passed by default by apollo server
      return db.games.find((game) => game.id === args.id);
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Review: {
    auhtor(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
  },
  Author:{
    reviews(parent){
      return db.reviews.filter((review)=>review.author_id===parent.id);
    }
  }
};

// server setup
const server = new ApolloServer({
  typeDefs, //-defination of tyeps of data ex:user/author, we expose to graph, which clinet query on.
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port 4000 with url", url);
