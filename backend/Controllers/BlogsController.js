const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URL
const client = new MongoClient(uri);

// example function for getting articles
module.exports.blogs = async (req, res, next) => {
  try {
    await client.connect();
    const database = client.db('ngo-app');
    const blogs = await database.collection('articles').find().toArray();
    return res.json(blogs);
  } 
  catch (e) {
    console.log(e);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    res.end();
  }
}
