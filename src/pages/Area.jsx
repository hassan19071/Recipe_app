import React from 'react';
import AreaFood from '../components/AreaFoods';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SecHead from '../components/SecHead';

const Area = () => {
    return ( 
         <>
           <Navbar/>
           <SecHead/>
           <AreaFood/>
           <Footer/>
         </>
        );
}
 
export default Area;