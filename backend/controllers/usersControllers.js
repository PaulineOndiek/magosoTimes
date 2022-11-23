const Users = require("../models/user")
const validator = require("validator")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const createToken=(id)=>{
    return jwt.sign( {id}, process.env.JWT_PASSWORD, {expiresIn: "3d"} )
}

const registerUser=async(req,res)=>{
    try{ 
        const {userName, email, password}=req.body
        const userExists= await Users.findOne({email:email}) //Checking if the user exists.
        if (userExists){
            return res.json("User Already Exists")
        }
        if (!validator.isEmail(email)){
          return res.json("Please enter a valid email") //checking if email is valid 
        }
        if (!validator.isStrongPassword(password)){
        return res.json("Please enter a strong password") // checking if the password is strong 
        }

const salt= await bcrypt.genSalt(10)
const hash=await bcrypt.hash(password, salt)
const newMember=new Users({
   userName,
   email,
   password:hash
   
})

 const savedMember=await newMember.save()

 return res.status(201).json(savedMember)

 const token=createToken(savedMember._id) //using jwt
return res.status(201).json({savedMember, token})
    }

    catch(error){
    res.json(error)
    }
}

const loginUser=()=>{
    try{



    }

    catch(error){
    res.json(error)
    }
}

module.exports = {registerUser, loginUser}
