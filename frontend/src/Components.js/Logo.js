import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
const LogoContainer=styled.div`
background:#F9F9F9;
padding:3em 0;
`
const Container=styled.div`
margin:0 auto;
width:80%;
`
const LogoDiv=styled.div`
background:#7D41E1;
color:white;
padding:3em;
border-radius:20px;

`
const LogoHead=styled.h2`
text-align:center;
color:#F9F9F9;
`
const LogoInput=styled.div`
display:flex;
align-items:center;
border-radius:8px;
padding:1em; 
background:white;
margin:0 auto;
width:60%;
margin-top:-2em;
box-shadow:0 0 1em grey;
`
const Input=styled.input`
border:none;
outline:none;
width:100%;
`
const LogoUl=styled.div`
list-style-type:none;
display:flex;
gap:2em;
align-items:center;
padding:2em 0;
`
const LogoLi=styled.li`
padding:.8em 2em;
&:hover,&:active{
    cursor:pointer;
    background:#2DAAFC;
    border-radius:15px;
  
}
`
const SelectOption=styled.select`
background:inherit
outline:none;
border:none;`



const Logo=()=>{
    return(
        <>
    <LogoContainer>
        <Container>
            <LogoDiv>
            <LogoHead>Magoso Times</LogoHead>
            </LogoDiv>
            <LogoInput>
            <SearchIcon></SearchIcon>
                <Input type="text" placeholder="Search"/>
                
            </LogoInput>
            
            <LogoUl>
                <LogoLi>All</LogoLi>
                <LogoLi>Technology</LogoLi>
                <LogoLi>Sports</LogoLi>
                <LogoLi>Entertainment</LogoLi>
                <LogoLi>Social</LogoLi>
                <LogoLi>Fitness</LogoLi>
                <LogoLi>Fashion</LogoLi>
            </LogoUl>

        </Container>
    </LogoContainer>
        </>
    )
}
export default Logo