require('dotenv').config();
const app = require("./src/app");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000);