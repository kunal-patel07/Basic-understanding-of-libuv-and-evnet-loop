let http =require("http")

let server = http.createServer(function(req,res){
    if(req.url === "/secretData"){
     res.end("there is nothing like secretData")
    }
    res.end("hello world")
})

server.listen(7777)