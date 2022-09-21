import React, { useState,Fragment } from "react";
import img from "../imgs/hero-bg1.jpg";
import "../css/recipe.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const RecipeInfo = () => {
  let mealName = useParams().name;
  let [meal, setMeal] = useState([]);

  useEffect(() => {
    let getFoods = async () => {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      )
        .then((res) => res.json())
        .then((data) => setMeal(data.meals));
      return res;
    };
     getFoods();
  }, []);

  return (
    <div className="recipe-info">
      <div className="container px-lg-5">
        <div className="recipe px-lg-5">
          {meal.map((res) => {
            return (
              <Fragment key={res.idMeal}>
                <div className="meal-img">
                  <img src={res.strMealThumb} className="w-100" height="500" />
                </div>
                <div className="title">
                  <h2>{res.strMeal}</h2>
                </div>
                <div className="category-area mb-3">
                  <span>Category: {res.strCategory},</span>
                  <span className="ms-3">Area: {res.strArea}</span>
                </div>
                <div className="row my-4 align-items-center">
                <div className="col-lg-4">
                <div className="ingredients">
                  <h3>Ingredients</h3>
                  <ul>
                      {res.strMeasure1 != "" && res.strMeasure1 != " "? <li>{res.strMeasure1 +" / " + res.strIngredient1}</li>:""}
                      {res.strMeasure2 != ""&&res.strMeasure2 != " "? <li>{res.strMeasure2 +" / " + res.strIngredient2}</li>:""}
                      {res.strMeasure3 != "" && res.strMeasure3 != " "? <li>{res.strMeasure3 +" / " + res.strIngredient3}</li>:""}
                      {res.strMeasure4 != "" && res.strMeasure4 != " "? <li>{res.strMeasure4 +" / " + res.strIngredient4}</li>:""}
                      {res.strMeasure5 != "" && res.strMeasure5 != " "? <li>{res.strMeasure5 +" / " + res.strIngredient5}</li>:""}
                      {res.strMeasure6 != "" && res.strMeasure6 != " "? <li>{res.strMeasure6 +" / " + res.strIngredient6}</li>:""}
                      {res.strMeasure7 != "" && res.strMeasure7 != " "? <li>{res.strMeasure7 +" / " + res.strIngredient7}</li>:""}
                      {res.strMeasure8 != "" && res.strMeasure8 != " "? <li>{res.strMeasure8 +" / " + res.strIngredient8}</li>:""}
                      {res.strMeasure9 != "" && res.strMeasure9 != " "? <li>{res.strMeasure9 +" / " + res.strIngredient9}</li>:""}
                      {res.strMeasure10 != "" && res.strMeasure10 != ""? <li>{res.strMeasure10 +" / " + res.strIngredient10}</li>:""}
                      {res.strMeasure11 != ""&& res.strMeasure11 != " "? <li>{res.strMeasure11 +" / " + res.strIngredient11}</li>:""}
                      {res.strMeasure12 != "" && res.strMeasure12 != " "? <li>{res.strMeasure12+" / " + res.strIngredient12}</li>:""}
                      {res.strMeasure13 != "" && res.strMeasure13 != " "? <li>{res.strMeasure13 +" / " + res.strIngredient13}</li>:""}
                      {res.strMeasure14 != "" && res.strMeasure14 != " "? <li>{res.strMeasure14 +" / " + res.strIngredient14}</li>:""}
                      {res.strMeasure15 != "" && res.strMeasure15 != " "? <li>{res.strMeasure15 +" / " + res.strIngredient15}</li>:""}
                  </ul>
                </div>
                </div>
                <div className="col-lg mt-lg-0 mt-0 ps-lg-5">
                <div className="instructions my-5">
                  <h3>Instructions</h3>
                  <p className="m-0">
                    {res.strInstructions}
                  </p>
                </div>
                </div>
                </div>
                <div className="video text-lg-end">
                  <a href={res.strYoutube} target="_blanck">Watch how to prepare</a>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
