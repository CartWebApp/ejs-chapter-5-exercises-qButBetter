require('./includes/scripts.js') // include the scripts used by the chapter

function dominantDirection(text) {
  // Use this to find the most used scripture
  let highestPerc = null;

  let temp = textScripts(textInput);

  // Finds direction from most used scripture & returns it
  if (highestPerc.direction === "ltr") {
    return ("ltr");
  }
  else if (highestPerc.direction === "rtl") {
    return ("rtl");
  }
  else if (highestPerc.direction === "ttb") {
    return ("ttb")
  }
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl