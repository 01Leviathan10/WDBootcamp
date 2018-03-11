var res = 0;
for (let i = 0; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        res += i * j;
    res += " "; 
    };
    res += "\n";
};
console.log( "Table is " + res);
