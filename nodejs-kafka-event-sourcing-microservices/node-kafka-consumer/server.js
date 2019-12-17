require('dotenv').config();
const kafka = require('kafka-node');
const util = require('util');
const express = require('express');
const mongoose  = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

const postModel = require('./postModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

try {
  console.log("kafka consumer is booting up")  
  const Consumer = kafka.Consumer;
  const client = new kafka.KafkaClient({
    kafkaHost: process.env.KAFKA_BROKERS,
  });
  let consumer = new Consumer(
    client,
    [{ topic: `${process.env.KAFKA_TOPIC_PREFIX}feed-service`, partition: 0 }],
    {
      autoCommit: true,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
      encoding: 'utf8',
      fromOffset: false
    }
  );
  consumer.on('message', async function(message) {
     const consumerdata = JSON.parse(message.value);

     console.log("===>",consumerdata);

     if(consumerdata.type === 'DELETE_USER_POST'){
         console.log(typeof(consumerdata.data));
         
        const deleteStatus =  await postModel.deletePosts(consumerdata.data);
        console.log("deleteStatus",deleteStatus);
         console.log("Post Deleted Successfully");
     } 
  });
  consumer.on('error', function(err) {
    console.log('error', err);
  });
}
catch(e) {
  console.log(e);
}

 mongoose.connect(process.env.MONGODB_CONNECT,{ useNewUrlParser : true, useUnifiedTopology: true }).then((err,res) => {

     console.log("mongodb is connected successfuly");

     require('./routes')(app);   

 })
 .catch(err => {
     console.log("Error => ",err);
 })

app.listen(4568,() => {
    console.log("Server is listening to port 4568");
})