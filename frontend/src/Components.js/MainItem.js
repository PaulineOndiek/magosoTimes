import styled from "styled-components"
import { Link } from "react-router-dom"
// import img1 from "../Images/sports.webp"
const MainContainer=styled.div`
padding:3em 0;
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;
// display:flex;
// gap:1em;
`
const ImageContainer=styled.div`
width:50%;
`
const Div=styled.div`
display:flex;
`
const InfoContainer=styled.div`
`
const Image=styled.img`
width:90%;
height:100%;
border-radius:10px;
box-shadow:0 0 2px grey;
object-fit:cover;
`
const Para=styled.p``
const MainHead=styled.h2`
font-size:3rem;`


const MainItem=({news})=>{
    return(
        <> 
        
        <MainContainer>
            <Container>
          
                         <Link to={`SinglePost/${news && news[0]._id}`}>

                         <Div>
                        <ImageContainer>
                        
                        <Image src={news && news[0].image}/>
                         </ImageContainer>
                         <InfoContainer>
                         <MainHead>{news && news[0].category}</MainHead>
                         <Para>{news && news[0].title}</Para>
                        
                       
                         
                         <Para>{news && news[0].author}</Para>
                         </InfoContainer>
                         </Div> 
       
                         </Link>
                        
     </Container>
        </MainContainer>
        </>
    )
}
export default MainItem 

