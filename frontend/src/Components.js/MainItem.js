import styled from "styled-components"
import img1 from "../Images/sports.webp"
const MainContainer=styled.div`
padding:2em 0;
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;
display:flex;
gap:2em;`
const ImageContainer=styled.div`
`
const InfoContainer=styled.div`
`
const Image=styled.img`
width:100%;
height:100%;
border-radius:10px;
box-shadow:0 0 2px grey;
`
const Para=styled.p``
const MainHead=styled.h2`
font-size:3rem;`
const MainItem=()=>{
    return(
        <> 
        <MainContainer>
            <Container>
                <ImageContainer>
                <Image src={img1} />
                </ImageContainer>
                <InfoContainer>
            
                <Para>Sports</Para>
                <MainHead>Women's Relay Finals</MainHead>
                <Para>Watch as Biles, whose last all-around defeat came in 2013, can become the first woman to win back-to-back Olympic all-around titles since 1968. She can also become the first U.S. woman in any sport to win five golds at a single Games. </Para>
                <Para>Prisca Mwendwa</Para>
                </InfoContainer>
                
            </Container>
        </MainContainer>
        </>
    )
}
export default MainItem