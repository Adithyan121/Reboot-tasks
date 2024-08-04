let array = [2,3,4,5,10,400];
let result = sumArray(array);
console.log(`The sum of all elements in the array =>[${array}]is :`,result);


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  