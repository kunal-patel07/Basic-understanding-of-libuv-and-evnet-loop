let http = require("http")
let mongodb =require("mongodb")
console.log(mongodb)
let server  = http.createServer(function(req,res){
    if(req.url === "/security"){
    res.end("there is nothing secured here");
    }
    res.end("this is server using node")
})

server.listen(3000)