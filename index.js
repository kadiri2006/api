const express = require("express");
const app = express();
const router = require("./router/routes");
const mongoose = require("mongoose");
const credential=require("./router/credential")

const dotenv =require("dotenv")
dotenv.config()


app.listen(process.env.PORT || 3000, () => {
  console.log("server connected ....");
});

mongoose.connect(
  process.env.MONGO
).then(()=>{console.log("db connected..")}).catch((err)=>console.log(err))

app.use(express.json())

app.use("/first", router);
app.use("/sign",credential)
