import React, { useEffect, useState } from 'react'
import Item from './Item';

const Beers = () => {

 const [users,setusers] =useState([]);

 const fecthApiData = async()=>{
    try {
         const res=  await fetch("https://api.punkapi.com/v2/beers");
        
         setusers (await res.json());
         
    } catch (error) {
        console.log(error);
    }
 };

useEffect (() =>{
     fecthApiData();
},[]);

  return (
    <div>
        
        <div className="container my-3">
             <h2 className="text-center">Drinks</h2>
            <div className="row text-center">
                {
                  users.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <Item title={element.name?element.name:""} 
                    descrip={element.description?element.description:""} urle={element.image_url} newrl={element.tagline}></Item>
               </div>
     
                    })
                }

            </div>

        </div>
    </div>
  )
}

export default Beers
