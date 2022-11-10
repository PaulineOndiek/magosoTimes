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
                
                {news && news.map(newsBlog=>{
                    return(
                        <>

                        <ImageContainer>
                        
                        <Image src={newsBlog.image} />
                         </ImageContainer>
                         <InfoContainer>
                         <Para>{newsBlog.category}</Para>
                         <MainHead>{newsBlog.description}</MainHead>
                         {/* dangerouslysetInnerHTML*/}
                         <Para dangerouslySetInnerHTML={{__html:newsBlog.body}} />
                         <Para>{newsBlog.author}</Para>
                         </InfoContainer>
                        
                        </>
                        
                    )
                })}
 
               
     </Container>
        </MainContainer>
        </>
    )
}
export default MainItem 

