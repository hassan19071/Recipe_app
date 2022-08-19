import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RecipeInfo from '../components/RecipeInfo';


const Recipe = () => {
    return ( 
          <Fragment>
            <Navbar/>
            <RecipeInfo />
            <Footer/>
          </Fragment>
        );
}
 
export default Recipe;