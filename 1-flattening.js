function flatten(arrayInput) {
    console.log(arrayInput.reduce((a, b) => a.concat(b)));
}

let arrays = [[1, 2, 3], [4, 5], [6]];
flatten(arrays);
// → [1, 2, 3, 4, 5, 6]