const {addPost, getPosts, getPost,deletePost,editPost}=require("../controllers/postControllers")
const express=require("express")
const router=express.Router()

//add post 
router.post("/new", addPost)

//get all posts from the database
router.get("/", getPosts)


//get a single post 
router.get("/:id", getPost) //full colon means using it as a parameter or params, get a single post
router.delete("/:id", deletePost) //delete a post
router.patch("/:id", editPost)  //update a post 
module.exports=router
