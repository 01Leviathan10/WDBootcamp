// function factorial(num) {
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//          result *= i;
//     }
//     return result;
// }
// const broj = factorial(56);

// console.log(broj);

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    let result = num;
    for (let i = num - 1; i >= 1; i--) {
        result *= i;
    }
    return result;
}
const broj = factorial(3);

console.log(broj);