import React,{useState} from 'react';
import "../css/search.scss";

const SearchSection = ({getFoods}) => {
    let [value,setValue] = useState("");

   let prevent = (event) =>{
    return event.preventDefault();
   };
   let handelChange = (e)=>{
     return setValue(e.target.value);
   };

    return ( 
         <div className="search-section">
            <div className="container">
                <div className="form">
                    <form onSubmit={prevent}>
                        <input type="text" value={value} onChange={handelChange} placeholder='Search about your favorite food'/>
                        <button onClick={()=> getFoods(value)}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
         </div>
        );
}
 
export default SearchSection;