import React from 'react'
import { signOut } from 'firebase/auth'
import {auth} from '../utils/firebase'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import {onAuthStateChanged } from "firebase/auth";
import {logo} from '../utils/constants'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const HandleSignout = () => {
    signOut(auth)
    .then(() => {
  // Sign-out successful.
  navigate("/");
  })
  .catch((error) => {
  // An error happened.
  navigate("/error")
  });
  }; 
   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) =>{
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      if(user){
      const {uid, email, displayName, photoURL} = user;
      dispatch(
        addUser({
          uid: uid, 
          email: email, 
          displayName:displayName, 
          photoURL: photoURL, 
      })
    );
    navigate("/browse")
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate("/");
      }
    });
    return () => unsubscribe();
  },[dispatch]);
  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
    <img src={logo}
    alt="logo"
    className="w-44"
    />
    {user && (
    <div className="flex justify-between p-2">
      <img
       className="w-12 h-12 rounded-full cursor-pointer"
       alt ="UserIcon" 
       src={user?.photoURL}
       />
       <button 
       className="text-white font-bold cursor-pointer hover:underline px-4"
       onClick={HandleSignout}
       >
         (Sign Out)
       </button>
    </div>
    )}
    </div>
    
  )
}

export default Header