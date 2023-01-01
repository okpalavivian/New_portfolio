import React from "react";
import "./styles.css";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div style={{ backgroundColor: "grey" }}>

      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
