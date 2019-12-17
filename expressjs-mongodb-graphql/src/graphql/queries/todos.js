const graphql = require('graphql');
const Todo = require('./../../models/Todo');
const { TodoType } = require('./../types/todo');

exports.todoQuery = new graphql.GraphQLObjectType({
  name: 'TodoQuery',
  fields: {
    todo: {
      type: new graphql.GraphQLList(TodoType),
      args: {
        _id: {
          type: graphql.GraphQLString,
        },
      },
      resolve: (_, { _id }) => {
        const where = _id ? { _id } : {};
        return Todo.find(where);
      },
    },
  },
});
