const dotenv=require("dotenv")
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const postRoutes=require("./routes/post")
const post=require("./models/post")
dotenv.config()

const app=express()
const port=process.env.PORT || 8001

app.use(cors())
app.get("/",(req,res)=>{
    res.send("This is the news site")
 })

 mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    app.listen(port,()=>{
        console.log(`Database is successfully connected and server is running on port: ${port}`)
    })
}
)
.catch((err)=> console.log(err))

app.use(express.json())
app.use("/api/posts", postRoutes)

// app.use("/api", postRoutes)
