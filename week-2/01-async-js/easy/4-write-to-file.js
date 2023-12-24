// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

let fs = require("fs");
fs.writeFile("write.txt", "you are killing it man you wrote this", (err)=> {
    console.log("data written to file");
})