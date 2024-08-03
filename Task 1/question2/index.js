let n = 20 //emter the number

function checkPrime(num) {
    if (n <= 1) {
        console.log(`${num} is Not a Prime number`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (n % i === 0) {
            console.log(`${num} is Not a Prime number`);
            return;
        }
    }
    console.log(`${num} is a Prime number`);
}

checkPrime(n);
