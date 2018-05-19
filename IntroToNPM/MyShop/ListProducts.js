var faker = require("faker");

console.log("=====================");
console.log("WELCOME TO MY SHOP!!!");
console.log("=====================");

for (let i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productAdjective}} {{commerce.productAdjective}} {{commerce.product}} - ${{commerce.price}}"));

};