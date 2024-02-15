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
    let temp = [];
    temp.push(`${Math.round(count * 100 / total)}%`);
    temp.push(`${name}`);
    return temp;
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
  // Gives the used scriptures in the passed argument
  let usedScriptures = null;
  usedScriptures = (textScripts(textInput));
  console.log(usedScriptures);

  let highestPerc = null;
  let highestLang = null;
  // Find most used scripture in the text
  // Then find the direction of the most used scripture
  for (i = 0; i < usedScriptures.length; i++) {
    // Sees if percentange of current one is less than next one
    if (usedScriptures[i + 1] != null && usedScriptures[i][0] < usedScriptures[i + 1][0]) {
      highestPerc = usedScriptures[i + 1][0];
      highestLang = usedScriptures[i + 1][1];
      console.log(highestPerc);
      console.log(highestLang);
    }
  }

  let langName = SCRIPTS.filter(s => s.name == highestLang);
  return (langName.direction);

  // Returns the direction of the most used scripture

}

console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection("Hello!"));
// → ltr
