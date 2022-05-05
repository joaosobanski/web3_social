import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import { AppContext } from "./store/app-contex";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route />
            <Route />
            <Route />
          </Routes>
        </AppContext>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
