function fibs(number) {
  // make arr
  arr = [];
  for (let index = 0; index < number; index++) {
    if (arr[0] === undefined) {
      arr.push(0);
    } else if (arr[1] === undefined) {
      arr.push(1);
    } else {
      arr[index] = arr[index - 1] + arr[index - 2];
    }
  }
  return arr;
}

const fibonacciSequence = fibs(8);
console.log(fibonacciSequence);
