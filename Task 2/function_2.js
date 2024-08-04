let string = "Adithyan" ;
let reversedStr = reverseTheString(string)
console.log(`The reversed string of "${string}" is :`,reversedStr);


function reverseTheString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
      
    }
    return reversedStr;
  }
