import { createContext, useEffect, useState, } from "react"
import PropTypes from 'prop-types'
import auth from "../Firebase.config"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { signOut } from "firebase/auth/cordova";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function Context({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)

    // sign up by email
    const signUp =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }


      // Update user profile
const updateUser=(name, image) =>{
  updateProfile(auth.currentUser, {
    displayName: name, 
    photoURL: image
  })
}

      //  sign in by email
      const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }

      // Sign in with google
const signInWithGoogle=()=>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}



// Sign in with Github
const signInWithGithub=()=>{
  setLoading(true)
  return signInWithPopup(auth, githubProvider)
}

// user info capture by onAuthStateChange
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (curUser)=>{
    setUser(curUser)
    setLoading(false)
    console.log(curUser);
  });
  return ()=>unsubscribe()
},[])

// logout user
const logout=() =>{
  setLoading(true)
return signOut(auth)
}


    // use context props
    const authInfo ={
      user,
      signUp,
      signIn,
      updateUser,
      signInWithGoogle,
      signInWithGithub,
      logout,
      loading
    }

  return (
    <AuthContext.Provider value = {authInfo}>{children}</AuthContext.Provider>
  )
}

export default Context


Context.propTypes={
    children:PropTypes.node
}