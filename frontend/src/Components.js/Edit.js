import React, { Component } from 'react';
import axios from 'axios';

const EditContainer=styled.div``


const Edit=()=>{
    const [update, setUpdate]=useState({
        title:"",
        body:"",
        author:"",
        description:"",
        image:"",
        category:"",
        tags:""
      })

      const editBlog=()=>{
        const editor=async()=>{
        const fetchBlog=await fetch (`http://localhost:8001/api/posts/${id}`, {
            method:"PATCH",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(update)
        })

        const responseJson=await fetchBlog.json()
            }
        }
        
    return(
        <>
        <EditContainer>
         <Button>{editBlog}</Button> 
        </EditContainer>
        </>
    )
}

export default Edit

