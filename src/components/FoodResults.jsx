import React from "react";
import { NavLink } from "react-router-dom";
import "../css/food.scss";
import img from "../imgs/not-exists.svg";

const Results = ({ FoodRes, isLoading }) => {
  return (
    <div className="food-results">
      <div className="container">
        <div className="head">
          <h3>{FoodRes ? FoodRes.length : "No"} Results</h3>
        </div>
        <div className="row">
          {isLoading ? (
            <div className="spinner-border m-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : FoodRes ? (
            FoodRes.map((res) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-6 mt-4 text-center"
                  key={res.idMeal}
                >
                  <div className="food">
                    <div className="img">
                      <img src={res.strMealThumb} className="w-100" />
                    </div>
                    <div className="title">
                      <h3>{res.strMeal}</h3>
                    </div>
                    <div className="button">
                      <NavLink to={`/recipe/${res.strMeal}`}>Recipe</NavLink>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="sad-img text-center">
              <img src={img} />
              <p className="mt-3">Try again</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
