//Importing required files/components
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

//Importing React portions
import React from "react";
import { Route, Routes } from "react-router-dom";


function App() {
  return(
  <>
  <Nav></Nav>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
  </>
  )
}

export default App;
