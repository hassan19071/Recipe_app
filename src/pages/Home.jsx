import React, { Fragment, useState , useEffect  } from 'react';
import Results from '../components/FoodResults';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';

const Home = () => {

    const [foodResults,setFood] = useState([]);
    const [isLoding,setLoding] = useState(false);
    const [word,setWord] = useState("");


    let getFoods = async (val)=>{
        setLoding(true);
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
                     .then(res => res.json()).then(data => setFood(data.meals));
        setLoding(false);
        return setFood;
      }

    useEffect(()=>{
        let getFoods = async ()=>{
            setLoding(true);
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
                         .then(res => res.json()).then(data => setFood(data.meals));
            setLoding(false);
            return setFood;
          };
           getFoods();
    },[]);

    return ( 
        <Fragment>
            <Navbar/>
            <Header/>
            <SearchSection getFoods={getFoods}/>
            <Results FoodRes={foodResults} isLoading={isLoding}/>
            <Footer/>
        </Fragment>
     );
}
 
export default Home;