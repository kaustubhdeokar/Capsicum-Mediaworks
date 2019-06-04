const eventemitter=require('events');

function func(a){
    for(var i=0;i<a;i++)
    console.log(i);
}

//create an emitter class
class myemitter extends eventemitter{
 
}

//init object
const myemitterobj=new myemitter();
//even listener
var a=10;
var arr;
myemitterobj.on('eventname',(arr)=>func(a));

myemitterobj.emit('eventname');
console.log(arr);