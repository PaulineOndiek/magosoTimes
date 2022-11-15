import styled from "styled-components"
import Nav from "../Components.js/Nav"
import Footer from "../Components.js/Footer"
import { useState } from "react"
const LoginContainer=styled.div`
background:#F9F9F9;
`
const Container=styled.div`
margin:0 auto;
width:80%;`
const LoginInfo=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:2em;
border-radius:10px;
box-shadow:0 0 4px #7D41E1;
justify-content:center;
width:40%;
`
const Input=styled.input`
padding:1.5em;
width:80%;
border:none;
border-bottom:2px solid grey;
outline:none;
background:inherit;`
const Button=styled.button`
padding:1em 3em ;
background:#7D41E1;
border-radius:5px;
border:none;
color:white;
width:80%;
margin:0 auto;
margin-top:2em;
cursor:pointer;`
const Para=styled.p`
color:red;`

const Login=()=>{
    const [error,setError]=useState(null)
    const [emptyLogin, setEmptyLogin]=useState([])
    const [signin, setSignin]=useState({
        userName:"",
        email:"",
        password:""
    })
const handleLogin=()=>{
 if (signin.userName==="" || signin.email==="" || signin.password===""){
    setError("Please fill out the required fields")
 }
 if (signin.userName===""){
emptyLogin.push("userName")
 }
 if (signin.email===""){
    emptyLogin.push("email")
 }
 if (signin.password===""){
    emptyLogin.push("password")
 }
}
    return(
        <>
        
        <LoginContainer>
        <Nav/>
            <Container>

                { error && <Para>{error}</Para>}
                <LoginInfo>
                    <Input className={emptyLogin.includes("userName")? "errors":""} value={signin.userName} type="text" placeholder="UserName"  onChange={(e)=>setSignin(prev=>({...prev,userName:e.target.value}))}/>
                    <Input className={emptyLogin.includes("email") ? "errors":""} value={signin.email} type="email address" placeholder="Email Address" onChange={(e)=>setSignin(prev=>({...prev,email:e.target.value}))} />
                    <Input className={emptyLogin.includes("password") ? "errors":""}  value={signin.password} type="password" placeholder="Password" onChange={(e)=>setSignin(prev=>({...prev, password:e.target.value}))}/>
                    <Button onClick={handleLogin} >Login</Button>
                </LoginInfo>
            </Container>
            </LoginContainer>
            <Footer/>
        </>
        
        
    )
}
export default Login