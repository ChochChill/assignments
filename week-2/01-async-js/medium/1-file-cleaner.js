// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
let fs = require('fs');
fs.readFile('read.txt','utf-8',function(err, data1){
    console.log("before:",data1);
    let str = data1.replace(/\s+/g, ' ');
    fs.writeFile('read.txt',str, (err)=>{
        if(err) throw err;
        console.log('File writing is complete');
        fs.readFile('read.txt','utf-8',function(err, data2){
            console.log('reading file after updation:',data2);
        })
    })
})



