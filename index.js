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

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  else {
    // split them pass in left sub and right sub
    const middleIndex = Math.floor(arr.length / 2);
    const leftSubArr = arr.splice(0, middleIndex);
    const rightSubArr = arr.splice(0);
    const leftArr = mergeSort(leftSubArr);
    const rightArr = mergeSort(rightSubArr);
    const newArr = [];
    let leftPointer = 0;
    let rightPointer = 0;
    const completeArrayLength = rightArr.length + leftArr.length;

    for (let index = 0; index < completeArrayLength; index++) {
      if (leftArr[leftPointer] < rightArr[rightPointer]) {
        newArr.push(leftArr[leftPointer]);
        leftPointer++;
        // check if pointer reach arr length then insert all and return new arr
        if (leftPointer === leftArr.length) {
          newArr.push(...rightArr.splice(rightPointer));
          return newArr;
        }
      } else if (leftArr[leftPointer] >= rightArr[rightPointer]) {
        newArr.push(rightArr[rightPointer]);
        rightPointer++;
        // check if pointer reach arr length then insert all and return new arr
        if (rightPointer === rightArr.length) {
          newArr.push(...leftArr.splice(leftPointer));
          return newArr;
        }
      }
    }
    return newArr;
  }
}

const sortedArr = mergeSort([2, 3, 1, 4122, 9, 434, 56]);
console.log(sortedArr);
