// Basically just a for-loop that takes functions
function loop(inputValue, testFun, upFun, boFun) {
    // Tester
    if (testFun(inputValue) === false) {
        return;
    }
    // Body
    boFun(inputValue);
    // Updator
    return(loop(upFun(inputValue), testFun, upFun, boFun));
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1