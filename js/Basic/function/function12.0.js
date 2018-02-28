function sing() {
    console.log("twinklee twinkle...");
    console.log("how i wonder...");
}
setInterval(sing, 1000)
sing();

setInterval(function () {
    console.log("I am anonymous function!");
    console.log("THIS IS AWOSME!");
}, 2000);