let string = "adithyan";
let count = getLengthOfString(string);
console.log(`Length of the String ${string} is :`,count); 


function getLengthOfString(str) {
    let count = 1;
    while (str[count] !== undefined) {
      count++;
    }
    return count;
  }
  
  