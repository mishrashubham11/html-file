import React from 'react'
import logo from './vercel.svg'

const Home = () => {
  return (
    <div>
     <h1 style={{textAlign: 'center', fontSize:56, color:' green'}}>Home page </h1>
     <input type="text" className='border-2 border-black' />

     <button className='my-btn'>submit</button>
     <img src="/next.svg" alt="" /> 
     <img src={logo.src} alt="" /> 
     {/* here we imp img and pitting it with varial=logo and .src */}
     
     



     </div>

  )
}

export default Home;