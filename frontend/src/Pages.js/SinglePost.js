import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { Context } from "../Context/States"

const SingleContainer=styled.div`
width:80%;
margin:0 auto;`

const Heading=styled.h1``
const Img=styled.img``
const Para=styled.p``

const SinglePost=()=>{
const [onePost,setOnePost]=useState(null)
const id =useParams().id 
useEffect(()=>{
    const getPosts=async()=>{
    const fetchData= await fetch(`http://localhost:8001/api/posts/${id}`)
    const data=await fetchData.json()

setOnePost(data)
}
console.log(id)
getPosts()
},

[])
const { post }=useContext(Context)
const [ news,setNews ]=post

    return(
        <>
        <SingleContainer>
        {console.log(onePost)}
        <Heading>{onePost && onePost.title}</Heading>
        <Img src={onePost && onePost.image} />
     
        <Para dangerouslySetInnerHTML={{__html:onePost && onePost.body}} />
        </SingleContainer>
        </>
    )
}
export default SinglePost 