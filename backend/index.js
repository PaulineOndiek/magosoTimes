const postRoutes=require("./routes/post")
const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const nodemon=require("nodemon")
const mongoose=require("mongoose")
const app=express()
const port=process.env.PORT || 8001

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database is successfully connected"))
.catch((err)=> console.log(err))

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})

app.get("/",(req,res)=>{
    res.send("This is the news site")
 })
    
app.use("/api", postRoutes)



