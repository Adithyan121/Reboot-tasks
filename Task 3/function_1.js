let number = 323;
let num = isPalindrome(number);
if(num === true){
    console.log("number is a palindrome");
}
else{
    console.log("number is not a palindrome");
}

function isPalindrome(num) {
    if (num < 0) return false;
    let reversed = 0;
    let original = num;
  
    while (num > 0) {
      let digit = num % 10;
      reversed = reversed * 10 + digit;
      num = Math.floor(num / 10);
    }
  
    return original === reversed;
  }
  