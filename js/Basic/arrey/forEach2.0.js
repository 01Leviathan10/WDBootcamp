
var colors = ["red","blue","grean","yellow"]

function myForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);    
    }
}


(function () {
    console.log("IM A FUNCTION!");
})()

myForEach(colors, function (color) {
   console.log(color); 
})