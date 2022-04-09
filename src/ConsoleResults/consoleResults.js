const testArray = [1, 2, 3, 4, 5];

const swap = (arr, leftIndex, rightIndex) => {
  [arr[rightIndex], arr[leftIndex]] = [arr[leftIndex], arr[rightIndex]];
}

console.log(`original array: ${testArray}`);
for(let i = 0; i < 2; i++) {
  swap(testArray, i, testArray.length - 1 - i);
}
console.log(`reversed array using object destructuring swap function: ${testArray}`);