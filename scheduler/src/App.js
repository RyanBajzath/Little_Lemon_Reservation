//Importing required files/components
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

//Importing React portions
import React from "react";

//This seems to be a simple application that does not require routing at the momment.
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
