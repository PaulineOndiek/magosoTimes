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


const Categories=()=>{
    return(
        <>
        <CategoriesContainer>
            <Container>
                <Category>
                 <ImageContainer>
                <Image src={img1} />
                </ImageContainer>
                <InfoContainer>
            
                <Para>Entertainment</Para>
                <MainHead>Get up to the minute entertainment news</MainHead>
                <Para>Your source for entertainment news, celebrities, celeb news and celebrity gossip. Check out the hottest fashion, photos, movies and TV shows! </Para>
                <Para>Prisca Mwendwa</Para>
                </InfoContainer>
                </Category>
                <Category>
                <ImageContainer>
                <Image src={img2} />
                </ImageContainer>
                <InfoContainer>
            
                <Para>Fashion</Para>
                <MainHead>Today's Fashion Trends</MainHead>
                <Para>What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language... </Para>
                <Para>Christine Achungo</Para>
                </InfoContainer>
                </Category>

                <Category>
                <ImageContainer>
                <Image src={img3} />
                </ImageContainer>
                <InfoContainer>
            
                <Para>Food</Para>
                <MainHead>Most Nutritious and healthy recipes</MainHead>
                <Para>We cover the most recent health studies to help you make informed diet decisions, new information about upcoming kitchen products and unusual news about crazy food combinations that you can find at restaurants around the country. </Para>
                <Para>Paul Mulamwa</Para>
                </InfoContainer>
                </Category>
            </Container>
            </CategoriesContainer>
        </>
    )
}
export default Categories