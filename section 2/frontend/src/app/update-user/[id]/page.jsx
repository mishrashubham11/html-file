//id folder banana must h for id yha lane ke liye ki update ho ske
'use client';
import { useParams } from 'next/navigation';
import React from 'react'

const updateUser = () => {

  const {id} = useParams();   //folder name in bracut


  const fetchUserData = () => {
    axios.get ('http://localhost:5000/user/getbyid/'+id)
    .then((result) => {
      console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <h1>update User</h1>
      <p> {id} </p>         
    </div>
  )
}

export default updateUser;