
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://btaylor9:Kacers08!@cs130.ih9t6pp.mongodb.net/?retryWrites=true&w=majority&appName=cs130"; // connection string
const client = new MongoClient(uri);

// example function for getting articles
async function articles() {
  try {
    const database = client.db('ngo-app');
    const articles = await database.collection('articles').find().toArray();
    return articles;
  } 
  catch (e) {
    console.log(e);
  }
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
module.exports = {articles};