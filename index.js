const express = require("express");
const app = express();
const router = require("./router/routes");
const mongoose = require("mongoose");
const credential=require("./router/credential")

const dotenv =require("dotenv")
dotenv.config()



app.listen(process.env.PORT, () => {
  console.log("server connected ....");
});

mongoose.connect(
  process.env.MONGO
).then(()=>{console.log("db connected..")}).catch((err)=>console.log(err))


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});





app.use(express.json())


app.use("/first", router);
app.use("/sign",credential)
