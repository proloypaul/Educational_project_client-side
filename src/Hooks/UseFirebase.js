import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
            navigate(destination)
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

    // Register with email and password
    const RegisterWithEmailAndPasswrod = (email, password, name, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const user = result.user
                const newUser = {email, displayName: name}
                setUser(newUser)
                // console.log(user)
                console.log(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        // Profile updated
                    }).catch(error => {
                        setError(error.message)
                    })
                navigate('/')
                setError('')
            }).catch(error => {
                setError(error.message)
            })
    }

    // sign in with email and password 
    const loginUsingEmailAndPassword = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                setError('')
                const direction = location?.state?.from ||"/"
                navigate(direction)
            }).catch(error => {
                setError(error.message)
            }) 
    } 



    return {
        user,
        error,
        signInWithGoogle,
        signOutProcess,
        loginUsingEmailAndPassword,
        RegisterWithEmailAndPasswrod

    }
}

export default UseFirebase;