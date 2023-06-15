import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "../Pages/Home/Index";
import ObrasPage from "../Pages/Obras";

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ObrasPage />} path="/obra" />
    
      </Routes>
    </BrowserRouter>
  );
}
