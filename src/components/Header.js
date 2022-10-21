import React from 'react'
import { Link, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
      <>
          <h2 className='sub_hader'>
             <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
            </Link> 
        </h2>
      </>
  )
}

export default Header;