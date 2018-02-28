var colors = ["red", "orange", "green"];
colors.push ("blue");
colors.unshift("pink");
console.log(colors.indexOf("orange"));
console.log(colors);

 var name = ["Jovana", "Marko", "Selena", "Draguljce"];
 name.pop();
 name.shift()
console.log(name); 


var fruits = ["banana", "orange", "apple", "lemon"];
var citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus);

var num = [1,2,3];
var otherNum = num.slice();
console.log(otherNum);