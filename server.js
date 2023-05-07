// what is the db.json file?

const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json')
// const api = require('./public/notes.html');

const PORT = process.env.PORT || 3001;

const app = express();

// three middleware we always want to use
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({
  extended : true}))
// WHEN I open the Note Taker FINISHED
// THEN I am presented with a landing page with a link to a notes page
// use GET /notes to return the notes.html file


//post route. look up the lecture that covers this in lesson 17


// WHEN I click on the link to the notes page FINISHED
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// 

// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// use GET /api/notes which should read the db.json file and return the saved notes as JSON. I'm pretty sure this should display the saved notes as described above.
app.get("/api/notes", (req, res) => {
  console.log(`${req.method} request received for notes`);
  fs.readFile("./db/db.json", (err, notes) => res.json(JSON.parse(notes)));
});

// fs.writeFile('./db/db.json', `${req.method}`, (err) =>
// err
//   ? console.error(err) : console.log('error found'));

// WHEN I click on the Save icon FINISHED
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// this new note should be added to the db.json file. use POST /api/notes to do this. look into npm packages that could give each note a unique id when it's saved
app.post('/api/notes', (req, res) => {
  const { title, text} = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
    }
    fs.readFile("./db/db.json", (err, data) => {
      var oldNotes = JSON.parse(data)
      oldNotes.push(newNote)
    
    fs.writeFile("./db/db.json", JSON.stringify(oldNotes), (err) => {
      res.json(oldNotes)
    })
  })
  }
})

// WHEN I click on an existing note in the list in the left-hand column FINISHED
// THEN that note appears in the right-hand column
//get route with a parameter. an index. also need a way to clean out what's already there too. could use a data attribute 

// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
//


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(3001, () => console.log(`App listening at http://localhost:${PORT}`));