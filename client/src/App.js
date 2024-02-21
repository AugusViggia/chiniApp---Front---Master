import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Cart from "./views/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import Loading from "./components/Loading/Loading";
import Detail from "./components/Detail/Detail";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const delayLoading = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(delayLoading);
  }, [location.pathname]);
  
  return (
    <div className="App">
      {isLoading && <Loading />}
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
