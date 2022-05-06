import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Trending from "./components/pages/Trending";
import { AppContext } from "./store/app-contex";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/trending' element={<Trending />} />
          </Routes>
        </AppContext>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
