import styled from "styled-components"
import Nav from "../Components.js/Nav"
import Logo from "../Components.js/Logo"
import MainItem from "../Components.js/MainItem"
import Categories from "../Components.js/Categories"
import Footer from "../Components.js/Footer"
import { useEffect, useState} from "react"
const HomeContainer=styled.div`
backround:#F9F9F9;
`
const Home=()=>{
    const [news, setNews]=useState([])

// const url="http://localhost:8000/api/posts"
// const option={
//     method:"GET", 
//     headers:{"content-type":"application/json"}, 
//     body:JSON.stringify(news)
// }
// fetch(url, option)
// .then(res=>console.log(res))
// .then(data=>console.log(data))
     useEffect(()=>{
fetch("http://localhost:8001/api/posts")
    .then(res=>{
        
     console.log(res)
    // set
    })
    
    // .catch(err=>console.log(err))

    }
    ,[])
    return(
        <HomeContainer>
      <Nav/>
        <Logo/>
        <MainItem/>
        <Categories/>
        <Footer/>
        </HomeContainer>
    )
}
export default Home