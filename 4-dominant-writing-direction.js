require('./includes/scripts.js') // include the scripts used by the chapter

// EJS Functions 
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({ name, count }) => {
    return `${name}`;
  });
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
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

  let countTtb = 0;
  let countLtr = 0;
  let countRtl = 0;

  for (i = 0; i < temp.length; i++) {
    if (temp[i].direction == "ttb") {
      countTtb++;
    }
    else if (temp[i].direction == "ltr") {
      countLtr++;
    }
    else if (temp[i].direction == "rtl"){
      countRtl++;
    }
  }

  if (countLtr > countTtb && countLtr > countRtl) {
    return ("ltr");
  }
  else if (countRtl > countTtb && countRtl > countLtr) {
    return ("rtl");
  }
  else if (countTtb > countRtl && countTtb > countLtr){
    return ("ttb");
  }

}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl