function F(param) {
    var N = function () {
        return param;
    };
    param++;
    return N;
}

var inner = F(123);

console.log(inner());