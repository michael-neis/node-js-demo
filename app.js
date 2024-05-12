import express from 'express';
import routes from './source/routes/routes.js';


// variable
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

//body parses
//create Javascrip array from req parses
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Application routes
// connect our application to Express app




  // // opening connection to db
  // async function openDbConnection (){
  //   try {
  //     // Connect the client to the server	(optional starting in v4.7)
  //     await client.connect();
  //     // Send a ping to confirm a successful connection
  //     await client.db("admin").command({ ping: 1 });
  //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
  //   } catch(err){
  //     console.log(err);
  //   }
  // }openDbConnection().catch(console.dir);




/*
  //Closing db connection
  async function closeDbConnection(){
    try {
      await client.close();
      console.log("Pinged your deployment. You successfully disconnected from MongoDB!")
    } catch(err){
      console.log(err);
    }
  } closeDbConnection().catch(console.dir);
*/





  // async function run() {
  //   try {
  //     // Connect the client to the server	(optional starting in v4.7)
  //     await client.connect();
  //     // Send a ping to confirm a successful connection
  //     await client.db("admin").command({ ping: 1 });
  //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
  //     // Creating people collection

  //   // Provide the name of the database and collection you want to use.
  //   // If the database and/or collection do not exist, the driver and Atlas
  //   // will create them automatically when you first write data.
  //   const dbName = "node-js-demo";
  //   const collectionName = "people";

  //   // Create references to the database and collection in order to run
  //   // operations on them.
  //   const database = client.db(dbName);
  //   const collection = database.collection(collectionName);

  //   // A list of people
  //   const people = [
  //         {
  //             FirstName: "Yann",
  //             LastName: "Mulonda",
  //             Title: "Software Engineer",
  //             LinkedIn: "https://www.linkedin.com/in/yannmjl/"
  //         },
  //         {
  //             FirstName: "Odon",
  //             LastName: "Mulambo",
  //             Title: "Software Engineer",
  //             LinkedIn: "https://www.linkedin.com/in/bernard-ngandu/"
  //         },
  //         {
  //             FirstName: "Michael",
  //             LastName: "Neis",
  //             Title: "Web Developer",
  //             LinkedIn: "https://www.linkedin.com/in/clerc-ngonga-b1253b174/"
  //         },
  //         {
  //             FirstName: "David",
  //             LastName: "Braun",
  //             Title: "Web Developer",
  //             LinkedIn: "https://www.linkedin.com/in/gloire-kafwalubi-3152871a0/"
  //         }
  //   ];

  //   try {
  //     const insertManyPeople = await collection.insertMany(people);
  //     console.log(`${insertManyPeople.insertedCount} documents successfully inserted.\n`);

  //   }catch (err) {
  //     console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  //   }
  //   } finally {
  //     // Ensures that the client will close when you finish/error
  //     await client.close();
  //   }
  
  // }
  // run().catch(console.dir);


// async function getNameFromDb() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//       // Creating people collection

//     // Provide the name of the database and collection you want to use.
//     // If the database and/or collection do not exist, the driver and Atlas
//     // will create them automatically when you first write data.
//     const dbName = "node-js-demo";
//     const collectionName = "people";

//     // Create references to the database and collection in order to run
//     // operations on them.
//     const database = client.db(dbName);
//     const collection = database.collection(collectionName);

//     try {
//       const peopleCursor = await collection.find();
//       const peopleResults = await peopleCursor.toArray();
//       console.log(peopleResults);
//       for(const person of peopleResults) {
//         console.log(person.FirstName);
//       }

//     }catch (err) {
//       console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
//     }
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
  
//   }
//   getNameFromDb().catch(console.dir);


//
routes(app);

app.listen(PORT, function(){
    console.log(`Server running on http://${PORT}`);
});
