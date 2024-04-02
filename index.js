const express = require("express");
const {createServer} = require ("http");
const {server} = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.route("/").get((req,res) =>{
    res.json("Hello")
});

io.on("connection",(socket) => {

});

httpServer.server.listen(3000);