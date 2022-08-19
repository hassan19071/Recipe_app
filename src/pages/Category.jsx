import React, { Fragment } from "react";
import CategoryFood from "../components/CategoryFoods";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThirdHead from "../components/ThirdHead";

const Category = () => {
  return (
    <Fragment>
      <Navbar />
      <ThirdHead />
      <CategoryFood />
      <Footer />
    </Fragment>
  );
};

export default Category;
