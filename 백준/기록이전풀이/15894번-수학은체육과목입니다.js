const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const num = parseInt(fs.readFileSync(filePath).toString().trim());
console.log(num * 4);
