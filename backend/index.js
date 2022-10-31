const postRoutes=require("./routes/post")
const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
dotenv.config()

const app=express()
const port=process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})

app.get("/",(req,res)=>{
    res.send("This is the news site")
 })

 mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database is successfully connected"))
.catch((err)=> console.log(err))

app.use(express.json())
app.use("/api/posts", postRoutes)

// app.use("/api", postRoutes)



