import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="App-content">
        <MainPage />
      </section>
    </div>
  );
}

export default App;
