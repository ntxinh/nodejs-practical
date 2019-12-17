const graphql = require('graphql');
const Todo = require('./../../models/Todo');
const { TodoType } = require('./../types/todo');

exports.createTodo = {
  type: TodoType,
  args: {
    content: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
    },
  },
  resolve: (_, { content }) => {
    const newTodo = new Todo({ content, done: false });
    return newTodo.save();
  },
};
