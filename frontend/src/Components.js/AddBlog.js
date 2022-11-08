import styled from "styled-components"
import { useState } from "react"
import Nav from "./Nav"
import Footer from "./Footer"
const BlogContainer=styled.div`
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;`
const BlogInput=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:1em;

`
const Input=styled.input`
outline:none;
border:none;
border:1px solid #2DAAFC;
width:70%;
padding:1.5em;
border-radius:5px;
margin-bottom:2em;
`
const TextArea=styled.textarea`
outline:none;
border:none;
border:1px solid #2DAAFC;
width:70%;
padding:1.5em;
border-radius:5px;`
const Button=styled.button`
padding:1em 3em ;
background:#7D41E1;
border-radius:5px;
border:none;
color:white;
cursor:pointer;
width:75%;
`
const Para=styled.p``

const AddBlog=()=>{
  const [upload, setUpload]=useState({
    title:"",
    body:"",
    author:"",
    comments:"",
    image:"",
    category:"",
    tags:[]
  })
  const [error, setError]=useState(null)

    const handleImageUpload=(e)=>{
      const file = e.target.files[0];
  const formData = new FormData();
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dsrjy1hwe/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'qbxjeslj';

  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  fetch(CLOUDINARY_URL, {
    method: 'POST',
    body: formData,
  })
  
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      if (data.secure_url !== '') {
        const uploadedFileUrl = data.secure_url;
        // localStorage.setItem('passportUrl', uploadedFileUrl);
        setUpload(prev=>({...prev,image:data.secure_url}))
      }
    })
 

    .catch(err => console.error(err));
    
// });
}
const handleAddBlog=async ()=>{
try{
if(upload.title==""|| upload.body==""|| upload.author==""|| upload.comments==""|| upload.image==""|| upload.category==""|| upload.tags==[""]){
  setError({error:"Please fill all the required fields"})
}
 
else{
const response=await fetch("http://localhost:8001/api/posts/new", {
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(upload)

})
const responseJson=await response.json()
// console.log(responseJson)
// console.log(upload)
// setUpload({
// title:"",
// body:"",
// author:"",
// comments:"",
// // image:"",
// category:"",
// tags:[]
// })
} 

}
catch(error){

}
}

    return(
        <>
        <Nav/>
        <BlogContainer>
            <Container>
                <BlogInput>
                <Para>{error}</Para>
                    <Input className={upload.title===""?"error":""} value={upload.title}type="text" placeholder="Title" onChange={(e)=>setUpload(prev=>({...prev,title:e.target.value}))}/>
          
                    <TextArea className={upload.body===""? "error":""} value={upload.body}placeholder="Body" onChange={(e)=>setUpload(prev=>({...prev,body:e.target.value}))}></TextArea>
                
                    <Input className={upload.author===""?"error":""} value={upload.author} type="text" placeholder="Author" onChange={(e)=>setUpload(prev=>({...prev,author:e.target.value}))}/>
                   

                    <TextArea className={upload.comments===""?"error":""} value={upload.comments} placeholder="Comments" onChange={(e)=>setUpload(prev=>({...prev,comments:e.target.value}))}></TextArea>
                   

                    <Input className={upload.image===""?"error":""} type="file" onChange={(e)=>handleImageUpload(e)} />
                   

                    <Input className={upload.category===""?"error":""} value={upload.category} type="text" placeholder="Category" onChange={(e)=>setUpload(prev=>({...prev,category:e.target.value}))}/>
                


                    <Input className={upload.tags===""?"error":""} value={upload.tags} type="text" placeholder="Tags" onChange={(e)=>setUpload(prev=>({...prev,tags:e.target.value.split(",")}))}/>
                   
                    <Button onClick={handleAddBlog}>Add Blog</Button>
                    </BlogInput>
            </Container>
        </BlogContainer>
        <Footer/>
        </>
    )
}
export default AddBlog 