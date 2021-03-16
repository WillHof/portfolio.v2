const express = require("express");
const app = express();
const mail = require("nodemailer");
const PORT = process.env.port || 8000
app.use(express.static("./client"))
app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}`)
})
