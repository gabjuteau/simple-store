import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Header/>

      <Gallery/>

      <Contact type={"contact-us"}/>

      <Footer/>
    </div>
  );
}

export default App;
