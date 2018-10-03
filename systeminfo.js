const os = require('os');


exports.getSysteminfo = function(){
   var x=os.arch();
   var y=os.hostname();
   var z=os.hostname();
   console.log(x+y+z);
}

exports.getUserinfo = function(){

}