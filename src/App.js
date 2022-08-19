import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import React, { useState, useEffect } from "react";
import Area from "./pages/Area";
import Category from "./pages/Category";
import Error from "./pages/Error";

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {loading ? <Loading /> : ""}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="recipe/:name" element={<Recipe />}></Route>
          <Route path="area/:area" element={<Area />}></Route>
          <Route path="category/:category" element={<Category />}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
