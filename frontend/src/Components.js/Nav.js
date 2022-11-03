import styled from "styled-components"
import { Link } from "react-router-dom"
const NavContainer=styled.div`
background:#F9F9F9;
`
const Container=styled.div`
margin:0 auto;
width:80%;`
const NavUl=styled.ul`
display:flex;
justify-content:space-between;
list-style-type:none;

`
const NavList=styled.li`
padding:.8em 2em;
text-decoration:none;
background:white;
border-radius:5px;
&:hover, &:active{
background:#2DAAFC;
color:white;
cursor:pointer;}`


const Nav=()=>{
    return(
        <NavContainer>
        <Container>
            <NavUl>
                <NavList><Link to="/">Home</Link></NavList>
                <NavList><Link to="/Register">Register/Signup</Link></NavList>
                <NavList><Link to="/Login">Login/Signin </Link></NavList>

            </NavUl>

        </Container>
        </NavContainer>
    )
}
export default Nav
