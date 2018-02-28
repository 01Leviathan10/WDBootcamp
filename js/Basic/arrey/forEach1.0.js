var nums = [45,33,23,2];

nums.forEach(num => {
   console.log(num);
});

myForEach(nums, function (num) {
    console.log(num);
});

// past in to browser

var colors = ["red","blue","grean","yellow"]

function myForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);    
    }
}