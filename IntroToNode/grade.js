function avarage(scores) {
    let total = 0;
    scores.forEach(element => {
        total += element;
    });
    let avg = total / scores.length

    return  Math.round(avg);
    
};

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(avarage(scores));



