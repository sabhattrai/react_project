import React from 'react'
import hh from "../component/hh.jpg"

const Getstart = () => {
  return (
   <section className='bg-gray-250 min-h-screen flex items-center justify-center '>
      <div className='bg-gray-100 flex shadow-lg max-w-3xl p-5'>
        <div className='md:w-1/2 px-16'>
          <h2 className='font-bold text-2xl text-[#002074]'>login</h2>
          <p className='text-sm mt-3 text-[#002074]'>if you already have a account log in</p>
            <form className='flex flex-col gap-4' action=''>
                 <input className="p-2 mt-8 rounded-xl border" type="text"
                 name='email'
                 placeholder='email'/>
                <div className='relative'>
                   <input className="p-2 rounded-xl border w-full" type="password"
                 name='password'
                 placeholder='password'/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                </div>
                 <button className='bg-[#002074] rounded-xl text-white py-2'>login</button>
            </form>
           <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
            <hr className='border-gray-400'></hr>
            <p className='text-center text-sm'>OR</p>
            <hr className='border-gray-400'></hr>
           </div>
             <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm'>
                <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 
            2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>login with google</button>
<p className='mt-5 text-xs border-b py-4 border-gray-400'>forgot your password?</p>
         <div className='mt-3 text-xs flex justify-between items-center'>
          <p className='text-xs'>if you don't have an account..</p>
          <button className='py-2 px-5 bg-white rounded-xl'>Register</button>
         </div>
        </div>
        <div className='w-1/2 md:block hidden '>
          <img className='rounded-2xl ' src={hh} alt=""/>
        </div>
      </div>
   </section>
  )
}
export default Getstart
