const express = require("express");
const server = express();
const responseRoute = require("./routes/response");
require("dotenv").config();
const database = require("./config/database");
const cors = require("cors");
const PORT = process.env.PORT || 4000;


server.use(express.json());

server.use( cors({origin:"http://localhost:3000",credentials:true}));


server.use("/api/v1",responseRoute);


database.connect();
server.listen(PORT,()=>{
    console.log("SERVER RUNNING FINE",PORT)
})