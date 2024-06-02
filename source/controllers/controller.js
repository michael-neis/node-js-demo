// ****************************************************************
// Controller functions to get the requested data from the models, 
// create an HTML page displaying the data, and return it to the 
// user to view in the browser.
// ****************************************************************
// import path from 'path';
// import { getNameFromDb } from '../models/models.js';
// import dotenv from 'dotenv';
// import { MongoClient, ServerApiVersion } from 'mongodb';


// dotenv.config();

// const user = process.env.USERNAME;
// const password = process.env.PASSWORD;
// const cluster_url = process.env.CLUSTER_URL;
// // console.log(user);
// // console.log(password);
// // console.log(cluster_url);
// const url =
//     `mongodb+srv://${user}:${password}@${cluster_url}.9ei9em9.mongodb.net/?retryWrites=true&w=majority&appName=node-js-demo`;
// console.log(url);

// const client = new MongoClient(url, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
// });


// const __dirname = path.resolve();
// // show html page
// export const home = (req, res) => {
//     //show this file when the "/" is requested
//     res.sendFile(__dirname+"/source/pages/home.html");
// }
// // get and show today's date
// export const getTodayDate = (req, res) => {
//     var dateObj = new Date();
//     var month = dateObj.getUTCMonth() + 1; //months from 1-12
//     var day = dateObj.getUTCDate();
//     var year = dateObj.getUTCFullYear();
//     var newdate = day+ "/" + month + "/" + year;
//     res.json({
//         today: newdate
//     });
// }
// // get list of month names
// export const getMonthsName = (req, res) => {
//     res.json({
//         1: 'January',
//         2: 'February',
//         3: 'March',
//         4: 'April',
//         5: 'May',
//         6: 'June',
//         7: 'July',
//         8: 'August',
//         9: 'September',
//         10: 'October',
//         11: 'November',
//         12: 'December'
//     });
// }






// // create new person
// export const createPerson = async (req, res) => {
//     const dbName = "node-js-demo";
//     const collectionName = "people";
//     var addedPerson;

//     try{
//         await client.connect();
//         await client.db("admin").command({ ping: 1 });

//         console.log("Connecting in updater function");

//         const database = client.db(dbName);
//         const collection = database.collection(collectionName);

//         try{

//             const newPerson = {
//                 FirstName: "Mitch",
//                 LastName: "McKenzie",
//                 Title: "Data Analyst"
//             }

//             // insertOne takes object with params and inserts it into the db
//             const result = await collection.insertOne(newPerson);
//             console.log(`New listing created with the following id: ${result.insertedId}`);
//         } catch (err) {
//             console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
//         }


//     } finally {
//         await client.close();
//     }
//     return res.json(addedPerson);
// }





// // creating export API to get list of people from DB
// export const getPeopleFromDatabase = async (req, res) => {
//     // Provide the name of the database and collection you want to use.
//     // If the database and/or collection do not exist, the driver and Atlas
//     // will create them automatically when you first write data.
//     const dbName = "node-js-demo";
//     const collectionName = "people";
//     var peopleResults;
//     try {
//           // Connect the client to the server	(optional starting in v4.7)
//           await client.connect();
//           // Send a ping to confirm a successful connection
//           await client.db("admin").command({ ping: 1 });
//           console.log("Connecting in controller function");
//           // Creating people collection
    
        
//         // Create references to the database and collection in order to run
//         // operations on them.
//         const database = client.db(dbName);
//         const collection = database.collection(collectionName);
    
//         try {
//           const peopleCursor = await collection.find();
//           peopleResults = await peopleCursor.toArray();
//           //console.log(peopleResults);
//           //   for(const person of peopleResults) {
//           //     console.log(person.FirstName);
//           //   }
//         }catch (err) {
//           console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
//         }
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
//     console.log(peopleResults);
//     return res.json(peopleResults);
// }
//     // getNameFromDb().catch(console.dir);



// // update person in DB
// export const updatePerson = async (req, res) => {
//     const dbName = "node-js-demo";
//     const collectionName = "people";
//     var updatedPerson;

//     try{
//         await client.connect();
//         await client.db("admin").command({ ping: 1 });

//         console.log("Connecting in updater function");

//         const database = client.db(dbName);
//         const collection = database.collection(collectionName);

//         try {
//             // update here
//             // updateOne function matches first object with filter params, uses $set to update or create new params
//             updatedPerson = await collection.updateOne({ FirstName:"Michael"}, {$set:{Title:"Software Developer", Employed: false}});

//             // returns promise opject that says whether there is a matching document and if it has been updated successfully
//             console.log(`${updatedPerson.matchedCount} document(s) matched the query criteria.`);
//             console.log(`${updatedPerson.modifiedCount} document(s) updated.`);
            

            
//           }catch (err) {
//             console.error(`Something went wrong trying to update the documents: ${err}\n`);
//           }
//     } finally {
//         await client.close();
//     }

//     return res.json(updatedPerson);
// }






import path from 'path';
import { connectToDatabase, getPeople, createPerson, updatePerson } from '../models/models.js';
import dotenv from 'dotenv';

dotenv.config();
const __dirname = path.resolve();
connectToDatabase();

// show html page
export const home = (req, res) => {
    res.sendFile(__dirname + "/source/pages/home.html");
}
// get and show today's date
export const getTodayDate = (req, res) => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; // months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = `${day}/${month}/${year}`;
    res.json({ today: newdate });
}
// get list of month names
export const getMonthsName = (req, res) => {
    res.json({
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    });
}

// get list of people -- This can come from a database and what's defined in model.js
// but for the purspuse of this demo, I'm going o juts type a couple of names
export const getPeoples = (req, res) => {
    res.json([
        {
            FirstName: 'Yann',
            LastName: 'Mulonda',
            title: 'Software Engineer',
            LinkedIn: 'https://www.linkedin.com/in/yannmjl/'
        },
        {
            FirstName: 'Michael',
            LastName: 'Neis',
            title: 'Software Developer',
            LinkedIn: 'https://www.linkedin.com/in/bernard-ngandu/'
        },
        {
            FirstName: 'Odon',
            LastName: 'Mulambo',
            title: 'Software Developer',
            LinkedIn: 'https://www.linkedin.com/in/clerc-ngonga-b1253b174/'
        },
        {
            FirstName: 'David',
            LastName: 'Braum',
            title: 'Full Stack Developer',
            LinkedIn: 'https://www.linkedin.com/in/gloire-kafwalubi-3152871a0/'
        }
    ]);
}

// create new person
export const createPersonHandler = async (req, res) => {
    const newPerson = {
        FirstName: "Mitch",
        LastName: "McKenzie",
        Title: "Data Analyst",
        LinkedIn: "https://www.linkedin.com/in/mitch-mckenzie/"
    }
    const result = await createPerson(newPerson);
    res.json(result);
}
// get list of people from DB
export const getPeopleFromDatabase = async (req, res) => {
    const peopleResults = await getPeople();
    res.json(peopleResults);
}
// update person
export const updatePersonHandler = async (req, res) => {
    const filter = { FirstName: "Michael" };
    const update = { Title: "Software Developer", Employed: false };
    const result = await updatePerson(filter, update);
    res.json(result);
}