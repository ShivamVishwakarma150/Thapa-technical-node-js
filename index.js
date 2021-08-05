const fs=require('fs');

//creating a new file
// fs.writeFileSync("read.txt","Shivam is a good boy.");

//it changes dynamically whenever we use it again data overwrite
// fs.writeFileSync("read.txt","Shivam is a good boy. and smart");

//to add extra data to a new line
// fs.appendFileSync("read.txt","how aare you I am fine Thank You:");

//to Read a file
// fs.readFileSync('read.txt');

// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

//Node.js includes an addtional data type called Buffer.
//(noy available in browser's javascript)
//Buffer is mainly used to store binary data.
// while reading from a file or reciceving packets over the network.

//to read binary data in string formate 
// org_data = buf_data.toString();


// console.log(org_data);

//To rename the file

// fs.renameSync('read.txt','readwrite.txt');
