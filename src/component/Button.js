import React from 'react'
import { Link } from 'react-router-dom'
import Login from "../pages/Login"
const Button = (props) => {
  return (
    <Link to="/Login">
    <button className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-250 '>
     {props.children}
    </button>
    </Link>
  )
}

export default Button
