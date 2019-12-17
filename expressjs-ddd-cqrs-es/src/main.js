import * as dotenv from 'dotenv';
import express from 'express';

// Load environment variables from .env file
dotenv.config();

const app = express();

app.listen(process.env.APP_PORT, () =>
  // eslint-disable-next-line
  console.log(`Server is listening on port ${process.env.APP_PORT}`),
);

module.exports = app;
