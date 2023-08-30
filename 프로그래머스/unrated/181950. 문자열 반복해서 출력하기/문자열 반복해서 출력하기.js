const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let answer = ""
    let [str, num] = input
    num = ~~num
    for (let i = 0; i < num; i++) {
        answer += str
    }
    console.log(answer)
});