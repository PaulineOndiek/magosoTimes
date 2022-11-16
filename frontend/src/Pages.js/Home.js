import styled from "styled-components";

import Nav from "../Components.js/Nav";
import Logo from "../Components.js/Logo";
import MainItem from "../Components.js/MainItem";
import Categories from "../Components.js/Categories";
import Footer from "../Components.js/Footer";
import { useEffect, useState } from "react";
import { useContext } from "react";
import {Context} from "../Context/States"
const HomeContainer = styled.div`
backround: #f9f9f9;
`

const Home = () => {
const {post}=useContext(Context)
const [news,setNews]=post
useEffect(()=>{
 
    fetch("http://localhost:8001/api/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setNews(data);
      });
    // .catch(err=>console.log(err))
  }, []);
  return (
    <HomeContainer>
      {/* {console.log(news)} */}
      <Nav/>
      <Logo/>
      
      <MainItem news={news} />

      <Categories news={news} />
      <Footer/> 
    </HomeContainer>
  );
};
export default Home;
