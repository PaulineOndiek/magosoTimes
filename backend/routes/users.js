const {registerUser, loginUser}=require ("../controllers/postControllers")
const express=require ("express")
const router=express.Router()

router.post("/register", registerUser)

router.post=("/login", loginUser)



module.exports=router