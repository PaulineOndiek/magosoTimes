import styled from "styled-components"
import { Link } from "react-router-dom"
import img1 from "../Images/entertainment.jpeg"
import img2 from "../Images/fashion.webp"
import img3 from "../Images/food.jpeg"
const CategoriesContainer=styled.div`
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;
display:flex;
flex-wrap:wrap;
gap:1em;
`
const ImageContainer=styled.div`
height:35vh;
`
const Image=styled.img`
width:100%;
border-radius:5px;
height:100%;
object-fit:cover;
`
const InfoContainer=styled.div``
const MainHead=styled.h2``
const Para=styled.p`
line-height:1em;`
const Category=styled.div`
box-shadow:0 0 2px grey;

`
const Div=styled.div`
width:30%;

`


const Categories=({news})=>{
    return(
        <>
        <CategoriesContainer>
            <Container>
           

                {news && news.map(newsData=>{
                    return(
                        <Div>
                      <Link to={`SinglePost/${newsData && newsData._id}`}>
            
                    <Category>
                 <ImageContainer>
                <Image src={newsData.image} />
                </ImageContainer>
                {/* <InfoContainer> */}
            
                <Para>{newsData.category}</Para>
                <Para>{newsData.title}</Para>
                <MainHead>{newsData.description}</MainHead>
                <Para>{newsData.author}</Para>
                {/* </InfoContainer> */}
                </Category>
                </Link>
                
                </Div>
                )
                })}
                
            </Container>
            </CategoriesContainer>
        </>
    )
}

export default Categories