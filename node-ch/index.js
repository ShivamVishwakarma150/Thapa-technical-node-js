const fs=require('fs');

//to make shivam directory
//fs.mkdirSync('Shivam');

//to add bio.txt file in shivam folder
//fs.writeFileSync('Shivam/bio.txt',"my name is shivam vishwakarma");

//append file 
// fs.appendFileSync('Shivam/bio.txt'," i working on node js");

// const data=fs.readFileSync('Shivam/bio.txt',"utf8");
// console.log(data);//it gives buffer data
// console.log(data.toString());
// console.log(data);//we can also use utf8 for decoding buffer data 

//Rename the file in mybio.txt
// fs.renameSync('Shivam/bio.txt','Shivam/myBio.txt')

//delete both file and folder 
// fs.unlinkSync('Shivam/myBio.txt'); //1st option for delete
// fs.rmdirSync("Shivam");//2nd option for delete