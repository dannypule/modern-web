const crypto = require("crypto");

const start = Date.now();

// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("2: ", Date.now() - start);
// });

// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("3: ", Date.now() - start);
// });

// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("4: ", Date.now() - start);
// });

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].forEach(
  (num) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      console.log(`${num}: `, Date.now() - start);
    });
  }
);
