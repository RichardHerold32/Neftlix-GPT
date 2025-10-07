import React from 'react'
import Header from './header'
import { useState, useRef } from 'react'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { homepageimg, photo } from '../utils/constants'

const Login = () => {
  const dispatch = useDispatch();
  const[isSignin,setIsSignin]=useState(true);
  const[errorMessage, setErrorMessage]=useState(null);
  
  const toggleSigninform=()=>{
    setIsSignin(!isSignin);
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleOnClick = () =>{
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message)
    if(message) return

    if(!isSignin)
      {
        //Sign up logic
        createUserWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value
        )
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, 
  photoURL:photo,
  })
  .then(()=>{
     const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName:displayName, 
            photoURL: photoURL, 
        })
      );
  })
.catch((error) => {
  // An error occurred
  setErrorMessage(error.message)
  // ...
});
 // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errormessage = error.message;
     setErrorMessage(errorCode +"-"+ errormessage);
    // ..
    });
  }else{
    signInWithEmailAndPassword(
    auth, 
    email.current.value, 
    password.current.value
  )
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const { uid, email, displayName, photoURL } = auth.currentUser;

  dispatch(
    addUser({
      uid,
      email,
      displayName,
      photoURL,
    })
  );
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errormessage = error.message;
    setErrorMessage(errorCode +"-"+ errormessage);
  });
        }
  }


  return (
<div>
    <Header />
    <div className="absolute">
        <img src={homepageimg} alt="logo"/>
    </div>

    <form 
    onSubmit=
    {
      (e)=>e.preventDefault()
    }
    className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-black rounded">
        <h1 className="text-3xl font-bold text-white">
          {isSignin?"Sign In":"Sign Up"}
        </h1>

        {!isSignin && (
          <input 
          ref={name}
          type="text"
          placeholder="Enter your name"
          className="p-4 my-4 w-full bg-gray-200"
          />
        )}
        <input 
        type="email"
        ref={email} 
        placeholder="Enter your email" 
        className="p-4 my-4 w-full bg-gray-200"
        />
        <input type="password" 
        ref={password}
        placeholder="Enter your password" 
        className="p-4 my-4 w-full bg-gray-200"
        />
        <p
        className="text-red-500 font-bold text-lg py-2">
        {errorMessage}
        </p>

        <button type="submit" 
        className="p-4 my-6 text-white bg-red-500 w-full rounded-lg cursor-pointer hover:bg-red-700 active:bg-red-900"
        onClick={handleOnClick}
        >
          {isSignin?"Sign In":"Sign Up"}
        </button>
        <p 
        className="py-4 cursor-pointer text-white" 
        onClick={toggleSigninform}
        >
          {isSignin?
          "New to Netflix? Sign up now"
          :"Already have an account? Sign in"
          }
        </p>
    </form>
</div>
  )
}

export default Login