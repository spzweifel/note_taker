// what is the db.json file?

const express = require('express');
const fs = require('fs');

const path = require('path');

const PORT = 3001;

const app = express();

app.use(express.static('public'));

// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page
// use GET /notes to return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// 

// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// use GET /api/notes which should read the db.json file and return the saved notes as JSON. I'm pretty sure this should display the saved notes as described above.

// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// this new note should be added to the db.json file. use POST /api/notes to do this. look into npm packages that could give each not a unique id when it's saved

// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
//

// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
//