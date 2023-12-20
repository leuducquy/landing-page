import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import Home from "../pages/Home";
import Product from "../pages/Product";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
      <Route  path="/" element={<Home/>}/>
          <Route  path="/Product" element={<Product/>}/>
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
