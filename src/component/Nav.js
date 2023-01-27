import React from "react";
import { Link } from "react-router-dom";
const Nav=()=>{
    return(
<div className="flex items-center justify-between p-4 z-[100] w-full absolute">
<h1 className="text-red-600 text-4xl font-bold cursor-pointer uppercase">web</h1>
<div className="">
    <Link to="/Sign">
     <button className="text-white pr-4">Sign up</button>
</Link>
<Link to="/Login">
<button className="bg-red-600 px-2 py-5 rounded crusor-pointer">log in</button>
</Link>
</div>
</div>
    );
}
export default Nav