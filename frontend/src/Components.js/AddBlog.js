import styled from "styled-components"
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import '../index.css';
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
const Body=styled.div`
width:75%;
`
const Para=styled.p`
color:red;
`

const AddBlog=()=>{

  const editorRef = useRef(null);
  const imageRef=useRef(null)

  const [upload, setUpload]=useState({
    title:"",
    body:"",
    author:"",
    description:"",
    image:"",
    category:"",
    tags:""
  })

  const [error, setError]=useState(null)
  
  const [emptyFields, setEmptyFields]= useState([])
// const emptyFields=[]
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

const log = () => {
  if (editorRef.current) {
    console.log(editorRef.current.getContent());
  }
};

const handleAddBlog=async ()=>{
try{
if(upload.title===""|| upload.body===""|| upload.author===""|| upload.description===""|| upload.image===""|| upload.category===""|| upload.tags===""){
  setError("Please fill out all the required fields")
}

if(upload.title ===""){
  emptyFields.push("title")
}

if(upload.author===""){
  emptyFields.push("author")
}
if (upload.body===""){
  emptyFields.push("body")
}
if (upload.description===""){
  emptyFields.push("description")
}
if (upload.image===""){
  emptyFields.push("image")
}
if(upload.tags===""){
  emptyFields.push("tags")
}
 if (upload.category===""){
  emptyFields.push("category")
 }
else{
const response=await fetch("http://localhost:8001/api/posts/new", {
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(upload)

})
const responseJson=await response.json()

if(response.ok){
  setUpload({
    title:"",
    body:"",
    author:"",
    description:"",
    image:"",
    category:"",
    tags:[]
  })
  imageRef.current.value=""

}
} 

}
catch(err){

}
}

// const editorRef = useRef(null);


    return(
        <>
        <Nav/>
        <BlogContainer>
            <Container>
                <BlogInput>
                {error && <Para>{error}</Para>}
                    <Input className={emptyFields.includes("title") ? "error":""} value={upload.title}type="text" placeholder="Title" onChange={(e)=>setUpload(prev=>({...prev,title:e.target.value}))}/>
{/* Adding a text editor from tinymce*/}     
{/* <Input className={emptyFields.includes("title") ? "error":""} value={upload.body} onChange={(e)=>setUpload(prev=>({...prev,body:e.target.value}))}/> */}
    
    {/* onEditorChange in tinymce */}
  <Editor  className={emptyFields.includes("body") ? "error": ""}onEditorChange={()=>setUpload(prev=>({...prev,body:editorRef.current.getContent()}))}
   ref={editorRef}
        apiKey='9cxz2iq08r8pqej8hzbsv9xyxv6nncuiydau2npkqwo26tbd'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""
        value={upload.body}

        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
     
      {/* <button onClick={log}>Log editor content</button> */}
    {/* </>
  );
}
JSX
copy icon */}
{/* 
                    <TextArea className={emptyFields.includes("body") ? "error":""} value={upload.body}placeholder="Body" onChange={(e)=>setUpload(prev=>({...prev,body:e.target.value}))}></TextArea> 
                 */}
                    <Input className={emptyFields.includes("author") ? "error":""} value={upload.author} type="text" placeholder="Author" onChange={(e)=>setUpload(prev=>({...prev,author:e.target.value}))}/>

                    <TextArea className={emptyFields.includes("description") ? "error":""} value={upload.description} placeholder="Description" onChange={(e)=>setUpload(prev=>({...prev,description:e.target.value}))}></TextArea>
                   

                    <Input className={emptyFields.includes("image") ? "error":""} type="file" ref={imageRef} onChange={(e)=>handleImageUpload(e)} />
                   

                    <Input className={emptyFields.includes("category") ? "error":""} value={upload.category} type="text" placeholder="Category" onChange={(e)=>setUpload(prev=>({...prev,category:e.target.value}))}/>
          

                    <Input className={emptyFields.includes("tags")? "error":""} value={upload.tags} type="text" placeholder="Tags" onChange={(e)=>{
                  const tags=e.target.value.split(",")
                  setUpload(prev=>({...prev,tags}))
                      }}/>
                   
                    <Button onClick={handleAddBlog}>Add Blog</Button>
                    </BlogInput>
            </Container>
        </BlogContainer>
        <Footer/>
        </>
    )
}
export default AddBlog 