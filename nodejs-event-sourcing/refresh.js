require('dotenv').config();
const mongoose = require("mongoose");
const E = require("./src/lib/events");
const Order = require("./src/lib/order");
mongoose.connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

// this script lets us recreate our database
// from the events
const refresh = async () => {
  await Order.deleteMany({});
  const orderEvents = await E.OrderEvent.find({});
  await E.saveEvents(orderEvents);
  return mongoose.disconnect();
};

refresh();