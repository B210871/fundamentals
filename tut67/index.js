const http = require("http");
const fs = require("fs");
 const home=fs.readFileSync('./home.html');
const about=fs.readFileSync('./about.html');
const contact=fs.readFileSync('./contact.html');
const service=fs.readFileSync('./service.html');

const Server= http.createServer((req,res)=>{
    url=req.url;
    console.log(url);
    
    
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    if(url == '/'){

        res.end(home);
    }
    else if(url == '/about')
    {
    res.end(about);
    }
    
    else if(url == '/contact')
    
    {
        res.end(contact);
    }


   else if(url == '/service')
    {
    res.end(service);
    }

 });


Server.listen(80,'127.0.0.1',()=>{
    console.log("Server run on port 80");
});