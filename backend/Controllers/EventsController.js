const { MongoClient } = require("mongodb");
// const uri = "mongodb://admin:symq5uMX2gTfeWm7@ac-y855aoy-shard-00-01.ih9t6pp.mongodb.net:27017/?ssl=true&replicaSet=atlas-8r8zfl-shard-0&authSource=admin&retryWrites=true&w=majority&appName=cs130"; // connection string
const uri = process.env.MONGO_URL
const client = new MongoClient(uri);

// example function for getting articles
async function events() {
  try {
    await client.connect();
    const database = client.db('ngo-app');
    const events = await database.collection('events').find().toArray();
    return events;
  } 
  catch (e) {
    console.log(e);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
module.exports = {events};