import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { useParams, useNavigate} from "react-router-dom"
import { Context } from "../Context/States"
import Loader from "../Images/Loader.gif"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SingleContainer=styled.div`
width:70%;
margin:0 auto;`

const Heading=styled.h1``
const Img=styled.img``
const Para=styled.p``
const Button=styled.button`
border:none;
outline:none;
background:transparent;
padding:.5em 1.5em;
color:#7D41E1;

`
const EditButton=styled.div`
display:flex;
align-items:center;
padding:.2em 1em;
width:10%;
background:#2DAAFC;
border-radius:5px;
`

const Buttons=styled.div`
display:flex;
gap:1em;

`


const SinglePost=()=>{
const [onePost,setOnePost]=useState(null)
const [loading,setLoading]=useState(true)
const id =useParams().id 

useEffect(()=>{
    const getPosts=async()=>{
    const fetchData= await fetch(`http://localhost:8001/api/posts/${id}`)
    const data=await fetchData.json()

setOnePost(data)
setLoading(false)
}
console.log(id)
getPosts()

},

[])
const { post }=useContext(Context)
const [ news,setNews ]=post
const navigate=useNavigate()
const handleEdit=()=>{
    const update=async()=>{
const editFetch=await fetch (`http://localhost:8001/api/posts/${id}`, {
    method:"PATCH",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify()
  
})
const responseJson=await editFetch.json()
    }
}


    return(
        <>
         {loading && <img src={Loader}/>} 
        <SingleContainer>
           
        {console.log(onePost)}
        <Heading>{onePost && onePost.title}</Heading>
        <Para> {onePost && onePost.date} </Para>
        <Img src={onePost && onePost.image}/>
       

     
        <Para dangerouslySetInnerHTML={{__html:onePost && onePost.body}} />
         <Buttons>
        <EditButton>
        <EditIcon/>
        <Button onClick={()=>navigate(`/edit/${onePost._id}`)}>Edit </Button>
        </EditButton>

        <EditButton>
            <DeleteIcon/>
        <Button onClick={handleEdit}>Delete</Button>
        </EditButton>
        </Buttons>
        </SingleContainer>

        </>
    )
}

export default SinglePost