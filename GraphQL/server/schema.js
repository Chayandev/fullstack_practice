export const typeDefs = `#graphql
    type Game {
     id: ID! # the exclamation mark means this field is non-nullable
     title: String!
     platform: [String]!
    }
    type Review {
     id:ID!
     raing:Int!,
     content:String!
   }
    type Author{
     id:ID!
     name:String!
     verified:Boolean
   }
    type Query { #this is the defination of the graph entry point which need to be mapped with the resolver fucntions
     games: [Game] 
     reviews:[Review]
     authors:[Author]
    }
`;
