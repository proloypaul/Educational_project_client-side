import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../Firebase/firebase.init";

initialization()

const UseFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // singIn with google
    const signInWithGoogle = (location, navigate) => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            setError('')
            const destination = location?.state?.from ||"/"
            navigate.replace(destination)
        }).catch(error => {
            setError(error.message)
        })
    }

    // onAuthStateChanged Login and Logout state change 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
    }, [auth])

    // SignOut process 
    const signOutProcess = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                setError('')
            }).catch(error => {
                setError(error.message)
            })
    }


    return {
        user,
        error,
        signInWithGoogle,
        signOutProcess
    }
}

export default UseFirebase;