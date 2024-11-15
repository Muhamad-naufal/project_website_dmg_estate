import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
