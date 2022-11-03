import styled from "styled-components"
import Nav from "../Components.js/Nav"
import img1 from "../Images/registeer.jpeg"
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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
gap:1em;`
const RegisterInfo=styled.div`
display:flex;
flex-direction:column;
gap:2em;
justify-content:center;
box-shadow:0 0 4px #7D41E1;
border-radius:10px;
height:60vh;
width:40%;`

const Input=styled.input`
// border-radius:6px;
padding:1.5em;
// gap:2em;
width:80%;
border:none;
border-bottom:2px solid grey;
outline:none;
background:inherit
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
`
const Image=styled.img``


const Register=()=>{
    return(
        <>
        <Nav/>
        <RegisterContainer>
            <Container>
                The Classic News Magazine
                <RegisterInfo>
                <RegisterInput>
                    <Input type="text" placeholder="Your UserName"/>
                    <Input type="email address" placeholder="Your Email"/>
                    <Input type="password" placeholder="Your Password"/>
                </RegisterInput>
                <Button>Create Account</Button>
                {/* <Image src={img1}/> */}
                </RegisterInfo>

            </Container>
        </RegisterContainer>
        </>
    )
}
export default Register