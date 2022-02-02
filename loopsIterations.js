// level {1/2/3}
// ## Level 1
// Write a function in Javascript to print the following pattern.

// ```
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
// ```

// The function can take the number of rows as input. The pattern should be printed in the console. Minimum number of rows should be 3.

let n = 5;
let string = '';
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    string += '';
  }

  for (let l = 1; l <= 2 * i - 1; l++) {
    string = +l;
  }
  string += '\n';
}
console.log(string);
