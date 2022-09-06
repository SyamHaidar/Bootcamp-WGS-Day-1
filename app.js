// core module

// file system
const fs = require("fs");

// input didalam console
const readline = require("readline");

// input stream dan output stream
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pertanyaan untuk input
rl.question("what is your name? ", (name) => {
  rl.question("what is your mobile phone? ", (phone) => {
    rl.question("what is your email? ", (email) => {
      // tampilkan di dalam terminal
      console.log(
        `Thank you ${name}, your mobile phone is ${phone}, and your email is ${email}`
      );

      // menuliskan string ke file (Synchronous)
      fs.writeFileSync(
        "file.txt",
        `Thank you ${name}, your mobile phone is ${phone}, and your email is ${email}`
      );

      // close / stop program
      rl.close();
    });
  });
});
