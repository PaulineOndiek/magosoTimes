import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { Context } from "../Context/States"

const SinglePost=()=>{
const [onePost,setOnePost]=useState(null)
const id =useParams
useEffect(()=>{
    const getPosts=async()=>{
    const fetchData= await fetch(`http://localhost:8001/api/posts/${_id}`)
    const data=await fetchData.json()

setOnePost(data)
}
getPosts()
},

[])
const {post}=useContext(Context)
const [news,setNews]=post

    return(
        <>
        <h1>{onePost && onePost.title}</h1>
        </>
    )
}
export default SinglePost