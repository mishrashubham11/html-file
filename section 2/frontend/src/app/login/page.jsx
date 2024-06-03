import React from 'react';
import classes from './login.module.css'; // here we import css for locally css using login.module.css

const login = () => {
  return (
    <div>
      <h1>login page</h1>
      <button className='my-btn'> Login button </button>
      <button className={classes.btn}> another button</button>
      </div>  // here class.btn we use for to giv class name with class word
  )
}

export default login