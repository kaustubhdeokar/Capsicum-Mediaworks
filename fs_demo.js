const fs=require('fs');
const path=require('path');

// fs.mkdir(path.join(__dirname,'/test'),{},e=>{
//     if (e) throw e;
//     console.log("folder created");
// });

//this can also be written as /para1,para2,function(e){////} 

//create and write to file

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello from a file!', e=>{
//     if (e) throw e;
//     console.log('File written too'); 
// })

//write files always overwrites.

// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'Append to a file!', e=>{
//     if (e) throw e;
//     console.log('File written too'); 
// })

//we can also add this to the third parameter(callback) of the write file function.


// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(e,data)=>{
//     if (e) throw e;
//     console.log(data);
// })

fs.rename(path.join(__dirname,'/test','helloworld.txt'),path.join(__dirname,'/test','hellorenamed.txt'),(e)=>{
    if (e) throw e;
    console.log("done");
})
