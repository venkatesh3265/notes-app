const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
const { argv } = require("yargs");
const { readNote } = require("./notes");

//console.log(process.argv);
///customize yargs version

yargs.version("1.1.0");

//create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body option",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//craete remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // Nest styles

    console.log("removing a note");
    notes.removeNote(argv.title);
  },
});

//craete remove command
yargs.command({
  command: "list",
  describe: "listing a note",
  handler(argv) {
    console.log("listing a note");
    notes.exportNote();
  },
});

yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("reading a note", argv.title);
    readNote(argv.title);
  },
});

yargs.parse();
//add,notes,read,list
