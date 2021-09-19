const express=require("express")
const router=express.Router()
const credential= require("../logic/credential")

router.post("/",credential.signUp)
router.get("/",credential.signIn)



module.exports=router