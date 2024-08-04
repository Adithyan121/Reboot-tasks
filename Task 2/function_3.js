let string = "MALAYALAM";
let result = isPalindrome(string)

if(result=true){
    console.log(`The string "${string}" is a palindrome`);
   }
   else{
       console.log(`The string "${string}" is not a palindrome`);
   }

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

 