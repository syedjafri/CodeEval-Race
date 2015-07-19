var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  
  var localStorage = [0,1];
  var n = parseInt(line);

  for (var i=2; i<=n; i++){
    localStorage[i]=localStorage[i-1]+localStorage[i-2];
  }
  return localStorage[n];
};

  
