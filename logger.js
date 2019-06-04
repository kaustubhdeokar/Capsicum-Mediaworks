const eventemitter=require('events');
const uuid=require('uuid');

console.log(uuid.v4());
//generates different ids.

class Logger extends eventemitter{
    log(msg){
        //call event
        this.emit('message',{id:uuid.v4(),msg});
    }
}

var a=new Logger();
a.on('message',data=>console.log(data));
a.log("new message");

//on calling the emit function the data passed to the on function
//the object is received by the data.