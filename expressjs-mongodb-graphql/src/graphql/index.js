const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { todoQuery } = require('./queries/todos');
const mutation = require('./mutations/index');

exports.todoSchema = new GraphQLSchema({
  query: todoQuery,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation,
  }),
});
