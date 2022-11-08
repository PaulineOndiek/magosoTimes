import styled from "styled-components"
import Nav from "../Components.js/Nav"
import Footer from "../Components.js/Footer"
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

const Login=()=>{
    return(
        <>
        
        <LoginContainer>
        <Nav/>
            <Container>
                <LoginInfo>
                    <Input type="text" placeholder="UserName"/>
                    <Input type="email address" placeholder="Email Address"/>
                    <Input type="password" placeholder="Password"/>
                    <Button>Login</Button>
                </LoginInfo>
            </Container>
            </LoginContainer>
            <Footer/>
        </>
        
        
    )
}
export default Login