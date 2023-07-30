// import Home from './Componants/Home ';
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function ProductData() {
    const [loading , setLoading] = useState(true);
    const [res,setRes] = useState([])
    const {id} = useParams()

    async function getData (){
    const data= await axios.get('https://dummyjson.com/products');
    console.log(data.data.products);
    setRes(data.data.products)
    setLoading(false);
  }
  useEffect(()=>{
     getData();
  },[]);

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
            return e.id==id&&(
              <div >
                <p>id: {e.id}</p>
                <p>title: {e.title}</p>
                <p>description: {e.description}</p>
                <p>price: {e.price}</p>
                <p>discountPercentage: {e.discountPercentage}</p>
                <p>rating: {e.rating}</p>
                <p>stock: {e.stock}</p>
                <p>brand: {e.brand}</p>
                <p>category: {e.category}</p>
                <img src={e.thumbnail}/>
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

export default ProductData