import React from 'react'

const Sign = () => {
  return (
    <div className=''>
      <h1 className='text-white flex justify-center text-center pt-10'>the Signin page</h1>
        <div className=' justify-center mt-10 item-center flex'>
           <div className='w-96 p-6 bg-slate-100 rounded-r-2xl rounded-l-2xl flex-col'>
           <label className='' htmlFor="username">Name  </label>
           <input
           id='username' 
           className='text-black border-2 border-green-500 rounded-l-full rounded-r-full  p-2'
           placeholder='name'/>
          <div className='flex-row  mt-3'>
          <label htmlFor="mail">E-mail  </label>
          <input  className='border-green-500 rounded-l-full rounded-r-full border-2 p-2 mt-5.5 ml-3.8' type='email' id='mail' placeholder='Sabin@gmail.com'></input>
          <div className=' mt-0 grid justify-center'>
          <button className='bg-black text-white rounded-l-full rounded-r-full mt-7 align-middle p-2 cursor-pointer'>Sign up</button>
          </div>
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="48" width="48"><g><path d="M10.05,7A3,3,0,1,1,7,4,3,3,0,0,1,10.05,7Z" fill="none" stroke="rgba(0,0,0,0.01)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.05,7V8.3c0,3.49,5.47.2,2.6-4.54A6.59,6.59,0,0,0,7,.5,6.5,6.5,0,1,0,9.52,13" fill="none" stroke="rgba(0,0,0,0.01)" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Sign
