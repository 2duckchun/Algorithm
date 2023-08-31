const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const payment = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(payment) {
  const charge = 1000 - payment;
  let fh = Math.floor(charge / 500);
  let h = Math.floor((charge - fh * 500) / 100);
  let ft = Math.floor((charge - fh * 500 - h * 100) / 50);
  let t = Math.floor((charge - fh * 500 - h * 100 - ft * 50) / 10);
  let f = Math.floor((charge - fh * 500 - h * 100 - ft * 50 - t * 10) / 5);
  let o = Math.floor(charge % 5);
  console.log(fh + h + ft + t + f + o);
}

solution(payment);
