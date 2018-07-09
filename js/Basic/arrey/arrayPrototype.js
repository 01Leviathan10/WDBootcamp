function myForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);    
    }
}

Array.prototype.myForEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

var friends = ["Marko", "Jovana", "Doktor"];

friends.myForEach(alert)

friends.myForEach(function (name) {
    console.log("I love " + name);
})