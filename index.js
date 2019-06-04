
const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
  
});


//this will look for an environment variable first. else on 5000.port number.
const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`server running on port ${PORT}`));

