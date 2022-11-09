import styled from "styled-components"
import {Link} from "react-router-dom"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer=styled.div`
background:#7D41E1;
margin-top:2em;`
const Container=styled.div`
margin:0 auto;
width:80%;
display:flex;
justify-content:space-between;`
const FooterInfo=styled.div`


`
const FooterHead=styled.h3``
const FooterLi=styled.li`
list-style:none;`

const Footer=()=>{
    return(
        <>
        <FooterContainer>
            <Container>
                <FooterInfo>
                <FooterHead>About Company </FooterHead>
                </FooterInfo>
                <FooterInfo>
                <FooterHead>Quick Links</FooterHead>
                    <FooterLi><Link to="/">Home</Link></FooterLi>
                    <FooterLi><Link to="/Register">Register</Link></FooterLi>
                    <FooterLi><Link to="/Login">Login</Link></FooterLi>
                    </FooterInfo>
                <FooterInfo>
                <FooterHead>Features</FooterHead>
                </FooterInfo>
                <FooterInfo>
                <FooterHead>Stay Connected</FooterHead>
                <TwitterIcon/>
                <FacebookIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
                </FooterInfo>
            </Container>
        </FooterContainer>
        </>
    )
}
export default Footer