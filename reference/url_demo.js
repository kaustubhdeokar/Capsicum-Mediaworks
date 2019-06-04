const url=require('url');

const myurl=new URL('https://kaustubhdeokar.netlify.com/');
//console.log(myurl.href);

//host or rite domain
var a=myurl.host.toString();
//deosnt get port
var b=myurl.hostname.toString();
//just to get the port number;
console.log(a.substring(b.length+1));

//pathname
console.log(myurl.pathname);

//search params.
console.log(myurl.searchParams);

myurl.searchParams.append('kausutbhd',21);

console.log(myurl.searchParams);

const arr=[1,2,3,4];

arr.forEach(a=>{
    console.log(a);
})