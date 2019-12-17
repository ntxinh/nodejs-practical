// *** ES5 ***
// var express = require('express');
// var app = express()
// app.listen(3000, function() {
//   console.log(`Server is listening on port 3000`);
// });
// module.exports = app;

// *** ES6 ***
import express from 'express';
const app = express();
app.listen(3000,() => console.log(`Server is listening on port 3000`));
module.exports = app;