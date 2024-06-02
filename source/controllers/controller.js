// ****************************************************************
// Controller functions to get the requested data from the models, 
// create an HTML page displaying the data, and return it to the 
// user to view in the browser.
// ****************************************************************

import path from 'path';
import { getPeople, createPerson, updatePerson } from '../models/models.js';
import dotenv from 'dotenv';

dotenv.config();
const __dirname = path.resolve();
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