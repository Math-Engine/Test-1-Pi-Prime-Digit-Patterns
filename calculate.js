const fs = require('fs');
const path = require('path');

// 2 이상의 자연수에서만 정상적으로 작동합니다.
function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n%i == 0) {
      return false;
    }
  }
  return true;
}

const PI = fs.readFileSync('PI_1000000.txt', 'utf8').trim();

n = Number(process.argv[2]);

result = [];
result_distribution = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let num;
for (var i = 2; i <= n; i++) {
  if (isPrime(i) == false) {
    continue;
  }
  num = PI[i - 1];
  result.push(num);
  result_distribution[num] = result_distribution[num] + 1;
}

console.log(`n = ${n}`);
console.log(`2 이상 n 이하의 소수의 개수: ${result.length}`);
console.log("==========");
for (var i = 0; i < 10; i++) {
  console.log(`${i} : ${result_distribution[i]}`);
}
console.log("==========");
console.log(result);
