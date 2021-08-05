const fs=require('fs');
//create object
const bioData ={
    name:"shivam",
    age : " 21",
    college:"ies university"
}

// 1: convet to JSON
// 2: dusre file me add kar 
// 3:readfile
// 4: again convert back to js obj orientation
// 5: console.log

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log("done");
});

//on read file err data
fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgData= JSON.parse(data);
    console.log(data);
    console.log(orgData);
});