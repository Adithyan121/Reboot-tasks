let n = 1634 //enter the number here
function checkArmstrongNumber(num) {
    const numDigits = num.toString().length;
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    if (sum === n) {
        console.log(`${num} is an Armstrong Number`);
    } else {
        console.log(`${num} is Not an Armstrong Number`);
    }
}

checkArmstrongNumber(n);