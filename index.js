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

function fibsRec(number) {
  if (number === 0) {
    return [];
  } else if (number === 1) {
    return [1];
  } else if (number === 2) {
    return [0, 1];
  } else {
    const arr = fibsRec(number - 1);
    const lastIndex = arr.length;
    const secondLast = arr[lastIndex - 2];
    const last = arr[lastIndex - 1];
    arr.push(secondLast + last);
    return arr;
  }
}

const fibonacciSequence = fibsRec(8);
console.log(fibonacciSequence);
