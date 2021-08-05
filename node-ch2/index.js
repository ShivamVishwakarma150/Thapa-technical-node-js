//CRUD operations using asynchronous file system

const fs = require("fs");

//create folder
// fs.mkdir("shivam",(err)=>{
//     console.log("folder created");
// });

//write in bio.txt in shivam folder
// fs.writeFile("./shivam/bio.txt","my name is shivam",(err)=>{
//     console.log("Files created");
// });

//append file

// fs.appendFile("./shivam/bio.txt","I am btech student",(err)=>{
//     console.log("File appended");
// });

//read file
// fs.readFile("./shivam/bio.txt","utf8",(err,data)=>{
//     console.log(data);
// });

//Rename file

// fs.rename("./shivam/bio.txt","mybio.txt",(err)=>{
//     console.log("rename done");
// });

//Delete file

// fs.unlink("./shivam/mybio.txt",(err)=>{
//     console.log("file deleted");
// });

//Delete directory

// fs.rmdir("./shivam",(err)=>{
//     console.log("folder  deleted");
// });
