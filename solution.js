// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

var multiply = function(num1, num2) {
    const n = num1.length;
  const m = num2.length;
  const result = new Array(n + m).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const mul = (num1[i] - '0') * (num2[j] - '0');
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + result[p2];

      result[p1] += Math.floor(sum / 10);
      result[p2] = sum % 10;
    }
  }

  while (result.length > 1 && result[0] === 0) {
    result.shift();
  }

  return result.join('');
    
};
