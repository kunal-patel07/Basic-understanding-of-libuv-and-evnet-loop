let fs  = require("fs")

let a = 10;

setImmediate(()=>{console.log("setImmdeiate expired")})


fs.readFile("./file.txt","utf-8",()=>{
    console.log("file read done",)
})

setTimeout(() => {
    console.log("time expired")
}, 0);

function printA(){
    console.log("a",a)
}
printA()

console.log("last line of file")