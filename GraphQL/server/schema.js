export const typeDefs = `#graphql
    type Game {
     id: ID! # the exclamation mark means this field is non-nullable
     title: String!
     platform: [String]!
     reviews:[Review!]
    }
    type Review {
     id:ID!
     raing:Int!,
     content:String!
     auhtor:Author!
     game:Game!
   }
    type Author{
     id:ID!
     name:String!
     verified:Boolean
     reviews:[Review!]
   }
    type Query { #this is the defination of the graph entry point which need to be mapped with the resolver fucntions
     games: [Game] 
     reviews:[Review]
     authors:[Author]
     game(id:ID!):Game
     review(id:ID!):Review
     author(id:ID!):Author
    }
    type Mutation{
      addGame(game:AddGameInput):Game
      updateGame(id:ID!,updatedGame:UpdateGameInput!):Game
      deleteGame(id:ID!):[Game] # updted list of games after deletion
    }
    input AddGameInput{
      title:String!
      platform:[String!]!
    }
    input UpdateGameInput{
      title:String    
      platform:[String!]
    }
`;
