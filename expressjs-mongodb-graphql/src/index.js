const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
// const schema = require('./graphql/schema/Schema');
const { todoSchema } = require('./graphql/index');
require('dotenv').config();

// connect to mongodb
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true });

const app = express();

app.use('*', cors());

app.use('/graphql', graphqlHTTP({
  schema: todoSchema,
  graphiql: true,
}));

app.get('/', (req, res) => res.send('Hello world!'));

// eslint-disable-next-line
app.listen('3000', _ => console.log('Server is listening on port 3000...'));
