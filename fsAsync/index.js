const fs=require("fs");
//in asynchronous we must call callback function to run our function
//create new file
// fs.writeFile('read.txt',"today is awesome day   :) ",
// (err)=>{
//     console.log("files is created");
//     // console.log(err);//to cheak error
    
// });

// we pass them a function as an argument - a callback -
// that gets called when that task completes.
// the callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it's nothing), and start
// checking for errors.

//for append file

// fs.appendFile("read.txt","my name is shivam",
// (err)=>
// {
//     console.log('task completed');
// })

//Read file

// fs.readFile("read.txt","utf8",(err,data)=>{
//     console.log(data);
// })