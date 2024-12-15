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

for (var i = 2; i <= n; i++) {
  if (isPrime(i) == false) {
    continue;
  }
  let num = PI[i - 1];
  result = result.push(num);
  result_distribution[num] = result_distribution[num] + 1;
}

print("n = ${n}");
print("==========");
for (var i = 0; i < 10; i++) {
  print("${i} : ${result_distribution[num]}");
}
print("==========");
print(result);
