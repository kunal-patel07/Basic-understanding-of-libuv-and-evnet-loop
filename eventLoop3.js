let fs = require("fs")

setImmediate(() => {console.log("setImmediate");});

setTimeout(() => {console.log("setTimeout")}, 0);

Promise.resolve().then(()=>{console.log("promise")})

fs.readFile("./file.txt","utf-8",()=>{
setTimeout(() => {console.log("setTimeout2")}, 0);

process.nextTick(()=>{console.log("2nd nextTick")})
setImmediate(()=>{console.log("second setImmedieate")})
console.log("file reading done")
})

 process.nextTick(()=>{console.log("Process.nextTick")})

console.log("last line of the code ")