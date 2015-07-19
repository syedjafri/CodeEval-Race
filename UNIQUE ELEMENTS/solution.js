var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  
  var localStorage = {};
  var array=line.split(",");
  //console.log(array)

  for (var i=0; i<array.length; i++){
    if (array[i] in localStorage){
      continue;
    }else {
    localStorage[array[i]]=true;
  }

  } 
  return Object.keys(localStorage).join(",")
  //console.log(localStorage) ;
}
