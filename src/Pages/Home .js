import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [loading , setLoading] = useState(true);
  const [res,setRes] = useState([])
  
  async function getData (){
  const data= await axios.get('https://dummyjson.com/products');
  console.log(data.data.products);
  setRes(data.data.products)
  setLoading(false);
}
useEffect(()=>{
   getData();
},[]);

// const handelonclick = (e) =>{
//   e.preventDefault();
// }


  return (
    <>
    {
      loading && (
        <>
        loading
        </>
      )
    }
    {
      !loading && (
        <>
        {
          res.map(e=>{
            return (
              <div className='home'  >
                <div>
                  <img src={e.images[0]}/>
                  <br/>
                  <a href={'/productdata/' + e.id} >{e.title}</a>
                </div>
            </div>
            )
          })
        
        }
        
        </>
      )
    }
    </>
    
  );
}
export default Home;