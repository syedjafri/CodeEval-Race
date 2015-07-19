// var fs  = require("fs");
// var filename = process.argv[2] || 'test.txt';

// fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
//   if (line != "") {
//     console.log(solution(line));
//   }
// });

function solution(){
  // Put your solution code here
  // Each line represents 1 test case provided by CodeEval
var result=1;
var primesSoFar=0;
var j;
for (j=1;primesSoFar<1000;j++){
  if (PrimeTime(j)){
    
    result+=j;
    primesSoFar++;
  }
}


function PrimeTime(num) { 
//checks if number is prime  
  if (num==1)
   return true;

  if (num%2===0)
    return false;

  for (var i=3; i<num;i+=2){
    if (num%i===0){
      return false;
    }
  }
  return true;
}

}
solution();
