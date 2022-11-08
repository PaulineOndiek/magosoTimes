import styled from "styled-components"
import Nav from "../Components.js/Nav"
import Footer from "../Components.js/Footer"
import img1 from "../Images/registeer.jpeg"
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react"
const RegisterContainer=styled.div`
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;
`
const RegisterInput=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:2em;
border-radius:10px;
box-shadow:0 0 4px #7D41E1;
justify-content:center;
width:40%;

`

const RegisterInfo=styled.div`
display:flex;
gap:5em;
justify-content:center;

`

const Input=styled.input`
padding:1.5em;
width:80%;
border:none;
border-bottom:2px solid grey;
outline:none;
background:inherit;
&:active{
    border-bottom:2px solid #7D41E1;
}
`
const Button=styled.button`
padding:1em 3em ;
background:#7D41E1;
border-radius:5px;
border:none;
color:white;
width:80%;
margin:0 auto;
margin-top:2em;
cursor:pointer;
`
const Para=styled.p`
color:#7D41E1;`
const Image=styled.img`
width:400px;
height:540px;
border-radius:10px;`


const Register=()=>{
    const [show,setShow]=useState("false")
    const [password,setPassword]=useState("false")
    return(
        <>
        <Nav/>
        <RegisterContainer>
            <Container>
                <Para>Get Your Latest News From Us</Para>
                <RegisterInfo>
                <RegisterInput>
                    <Para>Create Account</Para>
                    <Input type="text" placeholder="Your UserName"/>
                    <Input type="email address" placeholder="Your Email"/>
                    <Input type="password" placeholder="Your Password"/>
                    <Button>Create Account</Button>
                </RegisterInput>
                
                
                
                <Image src={img1}/>
                </RegisterInfo>
               
            </Container>
        <Footer/>
        </RegisterContainer>
        </>
    )
}
export default Register