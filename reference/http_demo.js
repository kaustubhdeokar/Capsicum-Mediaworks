
const http=require('http');

http.createServer((req,res)=>{
    //writing a response
    res.write("Hello World!");
    res.end();
}).listen(5000,()=>console.log("Running the server"));

