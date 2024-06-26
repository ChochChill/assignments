// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

let fs = require("fs");
fs.readFile("read.txt", "utf-8", function(err, data) {
    console.log("data from file", data);
})

let a = 0;
for (let index = 0; index < 100000000; index++) {
    a++;
}
console.log(a);