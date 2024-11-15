import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Project />
    </div>
  );
};

export default App;
