function kababToSnake(str) {
    let newStr = str.replace(/-/g, "_");
    return newStr;
}

const rec = kababToSnake("marko-pere-ves-svaki-dan");
console.log(rec);