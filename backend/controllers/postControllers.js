const { default: mongoose } = require("mongoose")
const bcrypt=require("bcrypt")
const Post=require("../models/post") //importing postSchema from models
const Users=require("../models/user") 


const addPost= async(req,res)=>{
    try{
     //destructuring const {title, body, comments,description, author, date, image, category,tags}=req.body
     const newPost=new Post({
         title:req.body.title,
         body:req.body.body,
         comments:req.body.comments,
         author:req.body.author,
         date:req.body.date,
         image:req.body.image,
         category:req.body.category,
         tags:req.body.tags
     }
     )

     await newPost.save()  
     return res.status(201).json(newPost)
     //save is asynchronous so we use async and await
 
    }
    catch(err){
     res.json(err)
 
    }
 }

 
 const getPosts=async(req,res)=>{
    try{
        const allPosts= await Post.find()
        return res.status(200).json(allPosts)
    }
    catch(err){
        res.json(err)
    }

}
const getPost=async(req,res)=>{
    try{
        const {id}=req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.json({error:"Invalid Post Id"})
        }
        const singlePost=await Post.findOne({_id:id})
        if(!singlePost){
            return res.json({error: "No Such Post"})
        }
         return res.status(200).json(singlePost)
    }
    catch(error){
        res.json(error)
           
    }
}
//delete one post 
const deletePost=async(req,res)=>{
try{
const {id}=req.params
if (!mongoose.Types.ObjectId.isValid(id)){
    res.json({Error:"Invalid Post Id"})
}
const deletedPost=await Post.findOneAndDelete({_id:id})
if (!deletedPost){
    return res.json({error:"No such Post"})
}
return res.status(200).json (deletedPost)
}
catch(error){
res.json(error)
}
}

const editPost=async(req,res)=>{
    try{
        const {id}=req.params
        if (!mongoose.Types.ObjectId.isValid(id)){
            res.json({error:"No Such Post"})
        }
        const editedPost=await Post.findOneAndUpdate({_id:id}, {...req.body})
       if(!editedPost){
        return res.json({error:"No Such Post"})
       }
       return res.status(200).json (editedPost)
    }
    catch(error){
    res.json(error)
    }
}


const registerUser=async(req,res)=>{
    try{ 
        const {userName, email, password}=req.body
const salt= await bcrypt.genSalt(10)
const hash=await bcrypt.hash(password, salt)
const newMember=new Users({
   userName,
   email,
   password:hash
   
})

 const savedMember=await newMember.save()
 return res.status(201).json(savedMember)

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


module.exports={addPost,getPosts,getPost,deletePost,editPost, registerUser, loginUser}