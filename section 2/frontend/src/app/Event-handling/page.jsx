'use client'; // for on click working
import React from 'react'

const EventHandling = () => {
  return (
    <div onMouseMove={(e)=>{console.log(e.clientX, e.clientY);}} className='px-64'> 
      <h1 className='text-center my-4 text-4xl font-bold'>Event Handling</h1>
      
<button onClick={()=>{alert ('click event performed')}}
 className='p-4 bg-violet-600 text-white rounded-md '
 > Click me</button>
{/* upper on is for events with use of arrow function */}




<input onChange={(event)=>{console.log(event.target.value)}} className='block mt-4 border-2 border-violet-600 p-3 w-full' type="text" />
<input onChange={(event)=>{document.body.style.background=event.target.value}} type="color" />
{/* the dom upper for change body clr with input typ color */}


<input onChange={(e)=>{console.log(e.target.file);}} type="file" />
{/* the upper input file give option of file in browser */}



    </div>
  )
}

export default EventHandling