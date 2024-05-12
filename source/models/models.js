import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';


dotenv.config();

const user = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster_url = process.env.CLUSTER_URL;
// console.log(user);
// console.log(password);
// console.log(cluster_url);
const url =
    `mongodb+srv://${user}:${password}@${cluster_url}.9ei9em9.mongodb.net/?retryWrites=true&w=majority&appName=node-js-demo`;
console.log(url);

const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});


// Read from API
export async function getNameFromDb() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      // Creating people collection

    // Provide the name of the database and collection you want to use.
    // If the database and/or collection do not exist, the driver and Atlas
    // will create them automatically when you first write data.
    const dbName = "node-js-demo";
    const collectionName = "people";
    var peopleResults;
    // Create references to the database and collection in order to run
    // operations on them.
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    try {
      const peopleCursor = await collection.find();
      peopleResults = await peopleCursor.toArray();
    //   console.log(peopleResults);
    //   for(const person of peopleResults) {
    //     console.log(person.FirstName);
    //   }

    }catch (err) {
      console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
    }
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
    return peopleResults;
  }
  getNameFromDb().catch(console.dir);

export default getNameFromDb;


// post to API

// update API

// delete from API