let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function flatten(arrayInput) {
    console.log(arrayInput.reduce((a, b) => a.concat(b)));
}

flatten(arrays);
// → [1, 2, 3, 4, 5, 6]