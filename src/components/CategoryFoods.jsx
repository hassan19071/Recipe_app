import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../css/area-food.scss";

const CategoryFood = () => {
  let CategoryName = useParams().category;
  let [meal, setMeal] = useState([]);
  let [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let getFoods = async () => {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${CategoryName}`
      )
        .then((res) => res.json())
        .then((data) => setMeal(data.meals))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false));
      return res;
    };
     getFoods();
  },[CategoryName]);

  return (
    <div className="area-food">
      <div className="container">
        <h3>Category: {CategoryName}</h3>
        <div className="food-results my-4">
          <div className="row">
            {isLoading ? (
              <div className="spinner-border m-auto" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              meal.map((res) => {
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFood;
