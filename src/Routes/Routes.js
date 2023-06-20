import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "../Pages/Home/Index";
import ObrasPage from "../Pages/Obra";
import ListObrasPage from "../Pages/ListObras";

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ObrasPage />} path="/obra" />
        <Route element={<ListObrasPage />} path="/obras" />
    
      </Routes>
    </BrowserRouter>
  );
}
