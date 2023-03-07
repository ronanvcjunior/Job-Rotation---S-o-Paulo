function isFibonacciNumber(num) {
  let a = 0, b = 1, c, sequence = [0, 1];
  while (num > b) {
    c = a + b;
    a = b;
    b = c;
    sequence.push(b);
  }
  if (num === b) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }
  return sequence;
}

isFibonacciNumber(34);
isFibonacciNumber(10);
