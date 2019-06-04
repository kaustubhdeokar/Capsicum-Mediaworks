
const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url === "/"){
        
        fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200,{"Content-type":'text/html'});
            res.end(content);    
        });
    }

    if(req.url === "/about"){
        
        fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200,{"Content-type":'text/html'});
            res.end(content);    
        });
    }
    

});


//this will look for an environment variable first. else on 5000.port number.
const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`server running on port ${PORT}`));

