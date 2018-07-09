function capitalize(str) {
    if (typeof str === "number") {
        return "this is a number!";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";


var capital = capitalize(city);
console.log(capital);