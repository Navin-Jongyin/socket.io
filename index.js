const { log } = require("console");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.route("/").get((req, res) => {
    res.json("Hello")
});

io.on("connection", (socket) => {
    socket.join("Kuay_Group");
    console.log("backend connected");
    socket.on("sendMsg", (msg) => { //recieve message from front
        console.log("message is", msg);
        // socket.emit("sendMsgServer", { ...msg, type: "otherMsg" });
        io.to("Kuay_Group").emit("sendMsgServer", { ...msg, type: "otherMsg" });
    })

});

httpServer.listen(3000);