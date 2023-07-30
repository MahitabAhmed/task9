import React from 'react';
import setRes from './Home ';
import res from './Home ';
const AddProduct = () => {

  const handleReplyCreated = (product)=>{
    setRes([...res,product]);
  }
  const OnSubmit = (e)=>{
    handleReplyCreated();
  }

  return(
    <div> 
      <form onSubmit={OnSubmit}>
        <div>
          <label>title</label>
          <br/>
          <input type='text'/>
        </div>

        <div>
          <label>description</label>
          <br/>
          <input type='text'/>
        </div>

        <div>
          <label>price</label>
          <br/>
          <input type='text'/>
        </div>

        <div>
          <label>discountPercentage</label>
          <br/>
          <input type='text'/>
        </div>

        <div>
          <label>brand</label>
          <br/>
          <input type='text'/>
        </div>

        <div>
          <label>category</label>
          <br/>
          <input type='text'/>
        </div>

        <div>
          <button type='Submit'>Submit</button>
        </div>

      </form>

     
    </div>
    ) ;
  
};
export default AddProduct;
