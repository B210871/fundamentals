const http = require('http');
const fs = require('fs');
// const { type } = require('os');
let filecontent=fs.readFileSync("tut1.html");


const Server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(filecontent);
})



Server.listen(8000,'127.0.0.1',()=>{
    console.log("server listening sucessfully on port 8000");
})