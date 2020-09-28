import React from 'react';
import GoogleButton from 'react-google-button'
import firebase from './firebaseApp';
import 'firebase/firestore';
import 'firebase/auth';
import { Link } from 'react-router-dom';

import {useAuthState} from 'react-firebase-hooks/auth';






function Header() {

  const auth = firebase.auth();

const [user]=useAuthState(auth);


// sign in function with google


  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(data=>{
      localStorage.setItem("email",data.user.email)
    

    });
  
  }

  const logOut = () => {
    auth.signOut().then(()=> {
      localStorage.removeItem("email");
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  }




  
  
  return (
    <>
    <header>
      
    <div id="menu" style={{float:"right",top:"0",margin:"10px", right:"0", position: "absolute" ,display:"flex"}}>

    {user ?<> <Link to="/"  style={{marginRight:"8px" ,cursor:"pointer",color: 'inherit', textDecoration: 'inherit',fontSize:"20px"}} >Home</Link><Link to="/saveditems"  style={{marginRight:"18px" ,cursor:"pointer",color: 'inherit', textDecoration: 'inherit',fontSize:"20px"}} >SavedItems</Link> </>: ""}

    {user ?<><button className="blue" style={{cursor:"pointer"}} onClick={logOut}>Logout</button> </>: <GoogleButton
onClick={ signInWithGoogle }
/>}
    

    </div>
   
    <div className ="wrapper">
      <h1>Welcome to Makeup Finder!</h1>
      <p>This website is designed to help you find makeup products!</p>
    </div>

  </header>

 
  </>
  )
}

export default Header
