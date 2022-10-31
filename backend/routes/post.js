const Post=require("../models/post")  //importing model(postSchema)from posts in models 
const express=require("express")
const router=express.Router()
//add post 

router.post("/new", async (req,res)=>{
   try{

    const newPost=new Post({
        title:req.body.title,
        body:req.body.body,
        comments:req.body.comments,
        author:req.body.author,
        date:req.body.date,
        image:req.body.image,
        category:req.body.category,
        tags:req.body.tags
    })
    await newPost.save()  
    return res.status(201).json(newPost)
    //save is asynchronous so we use async and await

   }
   catch(err){
    res.json(err)

   }

})
//get all posts from the database
router.get("/", async(req,res)=>{
    try{
        const allPosts= await Post.find()
        return res.status(200).json(allPosts)

    }
    catch(err){
        // res.json(err)
    }

})
// router.get("/posts",(req,res)=>{
//     res.send("These are posts") 
// })
module.exports=router
