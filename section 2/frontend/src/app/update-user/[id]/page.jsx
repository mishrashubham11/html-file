//id folder banana must h for id yha lane ke liye ki update ho ske
'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const updateUser = () => {

  const { id } = useParams();   //folder name in bracut


  const [userData , setUserData] = useState (null)  // making state


  const fetchUserData = () => {
    axios.get('http://localhost:5000/user/getbyid/' + id)
      .then((result) => {
        console.log(result.data);
        console.log(result.status);

        setUserData(result.data)   // sate me jo null tha yha data ho jayega


      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUserData();
  }, [])


  const submitForm = (value) => {
    console.log(values);
  }

  return (
    <div className='max-w-2xl mx-auto py-5'>
      <h1 className='text-3xl text-center font-bold'>Update User</h1>

      <div className='border-2 rounded--xl p-6 mt-10'>


     {userData!==null ?



     <Formik  initialValues={userData} onSubmit={submitForm}> 
      {/* import formik  and user data backend se value layega onsubmit layege kuki uper submit form variable banaye h*/}

      {
        (updateForm) => {
          return     <form onSubmit={updateForm.handleSubmit}> 
          {/* yha bhi onsubmit lagayenge */}
          <label htmlFor="name">Name</label>
          <input
            id='name'
            onChange={updateForm.handleChange}
            value={updateForm.values.name}
            type="text"
            className='bold w-full mt-1 py-2 px-3 rounded-md outline-none border-2' />


          <label htmlFor="email">Email Address</label>
          <input
          id='email'
          onChange={updateForm.handleChange}
          value={updateForm.values.email}
            type="text"
            
            className='bold w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none border-2' />


          <label htmlFor="password">Password</label>
          <input
          id='password'
          onChange={updateForm.handleChange}
          value={updateForm.values.password}
            type="text"
            
            className='bold w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none border-2' />

          <label htmlFor="city">City</label>
          <input
             id='city'
             onChange={updateForm.handleChange}
             value={updateForm.values.city}
            type="text"
            // formik me ye teen cheez honi jaruri h nhi to value updayte nhi hogi
         
            className='bold w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none border-2' />

          <button className='my-5 py-3 px-5 bg-green-500 text-black rounded-lg '>Submit</button>


        </form>
        }
      }


     </Formik>

       : <p>Loading...</p> //null uper wala jb tk data form me nhi ayega bkend se tbtk loading dikhayega
    }


      </div>

    </div>
  )
}

export default updateUser;