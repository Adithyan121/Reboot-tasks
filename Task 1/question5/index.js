let n1 = 5;//enter the number 1
let n2 = 8;//enter the number 2

function swapNumbers(a, b) {
    console.log(`Before swap: a = ${a}, b = ${b}`);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`After swap: a = ${a}, b = ${b}`);
}


swapNumbers(n1,n2);  