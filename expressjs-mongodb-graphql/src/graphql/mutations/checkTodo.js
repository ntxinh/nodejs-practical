const graphql = require('graphql');
const Todo = require('./../../models/Todo');
const { TodoType } = require('./../types/todo');

exports.checkTodo = {
  type: TodoType,
  args: {
    _id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
    },
  },
  resolve: (_, { _id }) => Todo.findById(_id)
    .then((todo) => {
      todo.done = true;
      return todo.save();
    }),
};
