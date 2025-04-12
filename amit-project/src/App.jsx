import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Slider from "./components/Slider";


const App = () => {
  return(
    <>
   
    <Header />
    <Slider />
    <AboutUs />
    <Services />
    
    <Footer />
    </>
  );
}

export default App