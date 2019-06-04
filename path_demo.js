const path=require('path');

console.log(path.basename(__filename));

console.log(path.dirname(__filename));
//only for the extension
console.log(path.extname(__filename));
//the file object
console.log(path.parse(__filename));
//concatenate
console.log(path.join(__dirname,'test','one.html'));