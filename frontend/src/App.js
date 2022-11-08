import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Home from "./Pages.js/Home";
import Register from "./Pages.js/Register"
import Login from "./Pages.js/Login";
import AddBlog from "./Components.js/AddBlog";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/AddBlog" element={<AddBlog/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App;
