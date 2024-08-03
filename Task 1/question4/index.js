let num = 2222 //enter the number

function sumOfDigits(n) {
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        n = Math.floor(n / 10);
    }

    console.log(`Sum of digits: ${sum}`);
}


sumOfDigits(num);

