# RESTAPI drawback:
 - OverFetching: When we need data using restapi, we call a api to fetch the data, sometime we fetch more data than what we need , that is called overfetching.
  example: We need only the username and phoneNumber , then in case of this we have to fetch the whole user profile then from that we have to filter what we need.
   ###### This basically casue the network bandwidth overuse, that, means it user more network bandwidth with more useless data that we need.

- UnderFetching: When we need data usign restapi we cann a api to fetch the data and sometine we fetch less data that what we need, that is called unerfetching.
example: suppose we need userName and also the associated books with the user, that what we have to do we have to call api to get username then we have to send another call with the username to fetch the book associated with the user that will cause the problem of extra api call, that will increase the server laod.

# What is GraphQL

## What is typeDefs and what is the resolvers