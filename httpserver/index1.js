

const fs= require("fs");
const http = require("http");
const url=require('url');
const server =http.createServer((req,res)=> {
    // console.log(req.url);
    if(req.url=="/")
    {
        res.end("Hello form the other sides :) ");
    }
    else if(req.url=="/about")
    {
        res.end("Hello from the about sides.");
    }
    else if(req.url=="/userapi")
    {   //REquest data using API
        fs.readFile(`${__dirname}/userApi/userapi.json`,"utf-8",(err,data)=>{
            console.log(data);
            const objDtata=JSON.parse(data);
            res.end(objDtata[0].name);
            // res.end(data);
        });
        
    }
    
    else if(req.url=="/contact")
    {   //res.write();
        res.end("Hello from the contactUS sides.");
    }
    
    else {
        //for handling error page
        res.writeHead(404,{"Content-type":"text/html "});
        res.end("<h1>404 error pages.page doesnt't exist</h1>");
    }
   
    
});

server.listen(8000,"127.0.0.1",()=>{
     console.log("Listening to the port no 8000");
});