
function solution(){
  // Put your solution code here
  // Each line represents 1 test case provided by CodeEval
 var largest=1;
 var check;
 
 for (var j=1; j<1000; j++){
  if (PrimeTime(j)){
    check=""+j;
   if (checkPalindrom(check)){
    largest=j;
   }
 }
}


function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
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
