import React from 'react'
import { Link } from 'react-router-dom'
const Button = (props) => {
  return (
    <Link to= "Getstart">
    <button className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-250 '>
     {props.children}
    </button>
    </Link>
  )
}

export default Button
