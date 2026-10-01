
const isOdd = (num) => {
    console.log(num % 2);
    if(num % 2 !== 0) {
        console.log(`${num} is IMPAIR`);
    } else {
        console.log(`${num} is PAIR`);
    }

}

isOdd(3);
isOdd(4);