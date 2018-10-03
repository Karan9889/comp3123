// require built-in file system module
var fs = require('fs');


var stream = fs.createReadStream("data.txt");
var file = fs.createWriteStream('./output.txt');
 
stream.on("data", function(data) {
     console.log(data);
     var text= data.toString();
     console.log(text);
     file.write(text);
})

stream.on("end",function(end){

    console.log("write is completed!");
    file.end();
});



