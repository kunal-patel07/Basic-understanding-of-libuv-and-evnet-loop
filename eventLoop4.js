let fs = require("fs")
let https = require("http")
setImmediate(()=>{console.log("immediate")})

setTimeout(() => {console.log("timeout")}, 0);

Promise.resolve().then(()=>{console.log("promise resolve")})
    
fs.readFile("./file.txt","utf-8",()=>{
    console.log("File reading CB")
})

process.nextTick(()=>{
    process.nextTick(()=>{console.log("inner nextTick")})
    console.log("nextTick")
})

console.log("last line of code")

//**
// last line of code 
//nextTick 
// inner nextTick
// promise resolve
// timeout
// immediate
// File reading CB
// */

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
setTimeout(()=>{console.log("this will coming in 3 second")},3000)
