const searchResults = document.getElementById("searchResults");

// hardcoded search term
const target = "Hote"; //todo: change to "Hote"
let found = false;

// manual loop search
for (let i = 0; i < jsArrayData.length; i++) {
  if (jsArrayData[i] === target) {
    found = true;
    break;
  }
}

// Check if we found the word in the array
if (found) {
  // If true → show "Found"
  searchResults.innerHTML = `<li>Found: ${target}</li>`;
} else {
  // If false → show "Not found"
  searchResults.innerHTML = `<li>Not found: ${target}</li>`;
}

// ternary operators! condition ? valueIfTrue : valueIfFalse;
// searchResults.innerHTML = found
//   ? `<li>Found: ${target}</li>`
//   : `<li>Not found: ${target}</li>`;
