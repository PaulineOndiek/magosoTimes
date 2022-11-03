import styled from "styled-components"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer=styled.div`
background:#2DAAFC;`
const Container=styled.div``

const Footer=()=>{
    return(
        <>
        <FooterContainer>
            <Container>
                <TwitterIcon/>
                <FacebookIcon/>
                <InstagramIcon/>

            </Container>
        </FooterContainer>
        </>
    )
}
export default Footer