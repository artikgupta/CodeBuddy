// level {1/2/3}
// ### level 1:
// 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
// Output should be [2, 3, 4]
// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6
// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"
// ​

// 1.
function test(arr) {
  return arr.slice(1).concat(4);
}

// 2

function sum(arr) {
  return arr.reduce((acc, cv) => acc + cv, 0);
}

// 3

let obj = { name: 'Elie', rank: 'Pro' };

for (let key in obj) {
  console.log(`${key}:${obj[key]}`);
}
