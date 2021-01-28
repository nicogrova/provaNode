var http = require("http");
var express = require("express");
var apiServer = express();
var hostname = "127.0.0.1";
var port = 3000;
var nome="nodegrova";
var path=require("path");

apiServer.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/", hostname, port);
});
apiServer.get("/nome", (req, res)=>{
    console.log("ho ricevuto una get su nome");
    res.end("ciao,il nome del server è: "+ nome);
});
apiServer.get("/", function(req,res){
    res.send("sei in home");
})
apiServer.get("/index", (req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
})
apiServer.get("/req", (req,res)=>{
    res.send("il nome del server è: " + req.query.nome);
})