const graphql = require('graphql');

exports.TodoType = new graphql.GraphQLObjectType({
  name: 'todo',
  description: 'a todo item',
  fields: {
    _id: { type: graphql.GraphQLString },
    content: { type: graphql.GraphQLString },
    done: { type: graphql.GraphQLBoolean },
  },
});
