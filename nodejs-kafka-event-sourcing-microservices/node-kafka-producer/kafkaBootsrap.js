require('dotenv').config();
const  kafka =  require('kafka-node');

const client = new kafka.KafkaClient({
  kafkaHost: process.env.KAFKA_BROKERS,
});
const admin = new kafka.Admin(client);

const topics = [
  { topic: `${process.env.KAFKA_TOPIC_PREFIX}feed-service`, partitions: 1, replicationFactor: 1 },
];

admin.createTopics(topics, (err, res) => {
  if (err) console.log('error in creating topics', err);
  console.log('Topics created / already created')
})