require('./includes/scripts.js') // include the scripts used by the chapter

// EJS Functions 
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

// Own Function
function dominantDirection(textInput) {
  // Use this to find the most used scripture
  let highestPerc = null;

  let temp = textScripts(textInput);

  return(temp);

  // Finds direction from most used scripture & returns it
  // if (highestPerc.direction === "ltr") {
  //   return ("ltr");
  // }
  // else if (highestPerc.direction === "rtl") {
  //   return ("rtl");
  // }
  // else if (highestPerc.direction === "ttb") {
  //   return ("ttb")
  // }
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl