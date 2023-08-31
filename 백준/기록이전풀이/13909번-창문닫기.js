const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const N = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(N) {
  console.log(Math.floor(Math.sqrt(N)));
}

solution(N);

// function solution(N) {
//   const windows = Array(N).fill(1);
//   let openedWindow = windows.length;
//   for (let i = 1; i < N; i++) {
//     for (let j = i; j < windows.length; j = j + i + 1) {
//       if (windows[j] === 0) {
//         openedWindow++;
//         windows[j] = 1;
//       } else {
//         openedWindow--;
//         windows[j] = 0;
//       }
//     }
//   }
//   console.log(openedWindow);
// }

// solution(N);
