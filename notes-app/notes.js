const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return `hello`;
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title;
  // });

  //const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("note title taken");
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    //console.log(dataJson);
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const deleteNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length === deleteNotes.length) {
    console.log(chalk.red("No notes was removed"));
    saveNotes(deleteNotes);
  } else {
    console.log(chalk.green("notes removed"));
  }
  console.log(deleteNotes);
};

const exportNote = () => {
  console.log(chalk.green("Your notes"));
  const notes = loadNotes();
  notes.forEach((element) => {
    console.log(element.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  //console.log(note);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  exportNote: exportNote,
  readNote: readNote,
};
