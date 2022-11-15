import styled from "styled-components"
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
const ImageContainer=styled.div``
const Image=styled.img`
width:100%;
border-radius:5px;
height:40%;`
const InfoContainer=styled.div``
const MainHead=styled.h2``
const Para=styled.p`
line-height:1em;`
const Category=styled.div`
width:30%;
box-shadow:0 0 2px grey;
`


const Categories=({news})=>{
    return(
        <>
        <CategoriesContainer>
            <Container>

                {news && news.map(newsData=>{
                    return(
                        <>
                    <Category>
                 <ImageContainer>
                <Image src={newsData.image} />
                </ImageContainer>
                <InfoContainer>
            
                <Para>{newsData.category}</Para>
                <MainHead>{newsData.title}</MainHead>
                <Para>{newsData.description}</Para>
                <Para>{newsData.author}</Para>
                </InfoContainer>
                </Category>

                {/* <Category>
                <ImageContainer>
                <Image src={newsData.image} />
                </ImageContainer>
                <InfoContainer>
            
                <Para>{newsData.category}</Para>
                <MainHead>{newsData.title}</MainHead>
                <Para>{newsData.description}</Para>
                <Para>{newsData.author}</Para>
                </InfoContainer>
                </Category> */}

                {/* <Category>
                <ImageContainer>
                <Image src={newsData.image} />
                </ImageContainer>
                <InfoContainer>
            
                <Para>{newsData.category}</Para>
                <MainHead>{newsData.title}</MainHead>
                <Para>{newsData.description}</Para>
                <Para>{newsData.author}</Para>
                </InfoContainer>
                </Category> */}
                
                </>
                )
                })}
                
            </Container>
            </CategoriesContainer>
        </>
    )
}
export default Categories