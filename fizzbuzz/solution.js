var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  // Put your solution code here
  // Each line represents 1 test case provided by CodeEval
  var args = arguments[0].split(" ");

  var x = args[0];
  var y = args[1];
  var n = args[2];
  var result="";
 
  for (var i=1; i<n; i++){
    if (i%x===0 && i%y===0){
      result+="FB";
    } else if (i%x ===0){
      result+="F";
    } else if (i%y ===0){
      result+="B";
    } else {
      result+=i;
    }
  }


  return result;
}
