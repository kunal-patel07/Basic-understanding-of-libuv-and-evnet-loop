let fs = require("fs");

let a = 100;

setImmediate(() => {
  console.log("immediate expired");
});

Promise.resolve().then(() => {
  console.log("promise resolved");
});

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file reading done");
});

setTimeout(() => {
  console.log("time expired");
}, 0);

process.nextTick(() => {
  console.log("process of nextTick done");
});

function printA() {
  console.log("A", a);
}

printA();
console.log("last line of code");

// a
// last line of code 
// process of nextTick done 
// promise resolved
// time expired 
// immedieate expired
// file reading done 





//a =100
//last line of code
//process of nextTick done 
//promise resolved
// time expired 
// immedieate expired 
//file reading done 
