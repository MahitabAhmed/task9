import React from 'react'
import { Link,NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div >
      <div >
        <ul >
          <NavLink activClassName='selected' exact to='/'>Home</NavLink>
          <br/>
          {/* <NavLink activClassName='selected' exact to='/productdata'>ProductData</NavLink> */}
          {/* <br/> */}
          <NavLink activClassName='selected' exact to='/AddProduct'>AddProduct</NavLink>

        </ul>

      </div>

    </div>
  )
}

export default Nav