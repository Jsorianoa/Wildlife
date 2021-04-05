import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.js";
import Main from "./components/Main";
import Footer from "./components/Footer";




function JournalApp() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default JournalApp;
