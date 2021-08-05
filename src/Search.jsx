import React ,{useState}from 'react';
import Sresult from './Sresult.jsx';

const Search = () => {
    const [img,setImg]=useState("");


    const inputEvent =(event)=>{
        setImg(event.target.value);
    };

    return(
        <>
        <div className="search_bar">
          <input type="text"  placeholder="Search Anyhere...."
           onChange={inputEvent} value={img} />  
        
        <br />
        <br />
       {img === "" ? null : <Sresult name={img}  />}
        </div>
        </>
        
        
    )
};

export default Search;
