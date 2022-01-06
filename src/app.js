const express = require("express")
const app=express();
require("./db/conn")
const studentRouter = require("./routers/router")
const Student=require("./model/students")
const port = process.env.port || 8000;

app.use(express.json());
app.use(studentRouter)
app.listen(port)
