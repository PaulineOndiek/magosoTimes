import { Editor } from '@tinymce/tinymce-react';
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import Loader from "../Images/Loader.gif"
import { useRef } from 'react';


const EditContainer=styled.div`
margin:0 auto;
width:80%;
`

const Input=styled.input`
display:flex;
outline:none;
border:none;
border:1px solid #2DAAFC;
width:70%;
padding:1.5em;
border-radius:5px;
margin-bottom:2em;`

const Button=styled.button`
padding:1em 3em ;
background:#7D41E1;
border-radius:5px;
border:none;
color:white;
cursor:pointer;
margin-right:1.5em;
`
const Img=styled.img``



const Edit=()=>{

    const [item, setItem]=useState(null)
    const [loading, setLoading]=useState(true)
    const editorRef=useRef(null)
    const id=useParams().id
    const [updateBlog, setUpdateBlog]=useState(null)
      useEffect(() => {
        const fetchBlog = async () => {
        const response = await fetch(`http://localhost:8001/api/posts/${id}`)
        const data = await response.json()
            setItem(data)
            setLoading(false)

        }

        fetchBlog()
    },[])

    
      useEffect(()=>{
       setUpdateBlog({...item})
      },
      [item])

      const log = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
        }
      };


      const handleImageChange = (e) => {
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
                setUpdateBlog(prev => ({ ...prev, image: data.secure_url }))
                if (data.secure_url !== '') {
                    const uploadedFileUrl = data.secure_url;
                    localStorage.setItem('passportUrl', uploadedFileUrl);
                }
                console.log(item)
            })

            .catch(err => console.error(err));
        console.log(updateBlog.image)
    }

      const navigate = useNavigate()

      const handleEditBlog=()=>{
        const editor=async()=>{
        const fetchBlog=await fetch (`http://localhost:8001/api/posts/${id}`, {
            method:"PATCH",
         headers:{"Content-Type":"application/json"},
          body:JSON.stringify(updateBlog)
        })

        const responseJson=await fetchBlog.json()
         console.log(updateBlog)
         if (fetchBlog.ok){
             navigate(`/post/${id}`) 

         }
             }
         }

         const discardButton = () => {
            window.confirm("Do you want to discard your changes?")
            navigate(`/post/${id}`)
        }
        
    return(
        <>
        <EditContainer>
        {loading && <img src={Loader} style={{ display: "block", margin: "0 auto" }} />}
            <Input defaultValue={updateBlog && updateBlog.title} onChange={(e) => setUpdateBlog(prev => ({ ...prev, title: e.target.value }))} />
            <Input type="file" onChange={(e) => handleImageChange(e)} />
            <Img src={updateBlog && updateBlog.image !== "" ? updateBlog.image : updateBlog && updateBlog.image} alt="" />
            <Input defaultValue={updateBlog && updateBlog.author} onChange={(e) => setUpdateBlog(prev => ({ ...prev, author: e.target.value }))} />
            <Input defaultValue={updateBlog && updateBlog.description} onChange={(e) => setUpdateBlog(prev => ({ ...prev, description: e.target.value }))} />
            <Input defaultValue={updateBlog && updateBlog.category} onChange={(e) => setUpdateBlog(prev => ({ ...prev, category: e.target.value }))} />

            <Editor updateBlog={updateBlog} setUpdateBlog={setUpdateBlog}
   ref={editorRef}
        apiKey='9cxz2iq08r8pqej8hzbsv9xyxv6nncuiydau2npkqwo26tbd'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""
        value={updateBlog && updateBlog.body}

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

            <Input defaultValue={updateBlog && updateBlog.tags} onChange={(e) => setUpdateBlog(prev => ({ ...prev, tags: e.target.value }))} />
        <Button onClick={handleEditBlog}>Save Changes</Button>
         <Button onClick={discardButton}>Discard Changes</Button> 
         
        </EditContainer>
        </>
    )
}


export default Edit

