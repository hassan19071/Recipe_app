import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.scss";

const Navbar = () => {
  let [category, setCategory] = useState([]);
  let [area, setArea] = useState([]);

  let getCategories = async () => {
    let results = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    )
      .then((res) => res.json())
      .then((data) => data.meals);

    return setCategory(results);
  };
  let getAreas = async () => {
    let results = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    )
      .then((res) => res.json())
      .then((data) => data.meals);

    return setArea(results);
  };
  useEffect(() => {
    return getCategories;
  }, []);
  useEffect(() => {
    return getAreas;
  }, []);

  return (
    <nav className="navbar navbar-expand-lg py-lg-0 py-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/Recipe_app">
          Rec<span>ipe</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav py-lg-0 py-3">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/Recipe_app">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown category">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {category.map((cate) => {
                  return (
                    <li key={cate.strCategory}>
                      {cate.strCategory == "Pork" ? (
                        ""
                      ) : (
                        <NavLink
                          className="dropdown-item"
                          to={`/category/${cate.strCategory}`}
                        >
                          {cate.strCategory}
                        </NavLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item dropdown area">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Area
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {area.map((area) => {
                  return (
                    <li key={area.strArea}>
                      <NavLink
                        className="dropdown-item"
                        to={`/area/${area.strArea}`}
                      >
                        {area.strArea}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
