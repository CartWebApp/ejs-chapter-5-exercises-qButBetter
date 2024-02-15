function every(array, test) {
  for (i = 0; i < array.length; i++) {
    if (test(array[i]) === false) {
      return (false);
    }
  }
  return (true);
}

function someEvery(inputArray, test) {
  return !inputArray.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log("\n");

console.log(someEvery([1, 3, 5], n => n < 10));
// → true
console.log(someEvery([2, 4, 16], n => n < 10));
// → false
console.log(someEvery([], n => n < 10));
// → true