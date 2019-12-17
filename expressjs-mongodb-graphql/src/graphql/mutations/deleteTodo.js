const graphql = require('graphql');
const Todo = require('./../../models/Todo');
const { TodoType } = require('./../types/todo');

exports.deleteTodo = {
  type: TodoType,
  args: {
    _id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
    },
  },
  resolve: (_, { _id }) => Todo.findOneAndRemove(_id),
};
