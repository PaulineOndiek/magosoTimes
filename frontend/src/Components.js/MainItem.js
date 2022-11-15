import styled from "styled-components"
// import img1 from "../Images/sports.webp"
const MainContainer=styled.div`
padding:2em 0;
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;
display:flex;
gap:2em;`
const ImageContainer=styled.div`
width:50%;

`
const InfoContainer=styled.div`
`
const Image=styled.img`
width:80%;
height:100%;
border-radius:10px;
box-shadow:0 0 2px grey;
`
const Para=styled.p``
const MainHead=styled.h2`
font-size:3rem;`
const MainItem=({news})=>{
    return(
        <> 
        
        <MainContainer>
            <Container>

                        <ImageContainer>
                        
                        <Image src={news && news[0].image}/>
                         </ImageContainer>
                         <InfoContainer>
                         <MainHead>{news && news[0].category}</MainHead>
                         <Para>{news && news[0].title}</Para>
                        
                         {/* dangerouslysetInnerHTML*/}
                         {/* <Para dangerouslySetInnerHTML={{}} /> */}
                         <Para>{news && news[0].author}</Para>
                         </InfoContainer>
       
     </Container>
        </MainContainer>
        </>
    )
}
export default MainItem 

