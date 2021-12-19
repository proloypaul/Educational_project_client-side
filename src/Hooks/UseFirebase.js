import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../Firebase/firebase.init";

initialization()

const UseFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [head, setHead] = useState(false) 
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // singIn with google
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            saveToUserData(user.displayName, user.email, "PUT")
            setError('')
            const destination = location?.state?.from ||"/"
            navigate(destination)
        }).catch(error => {
            setError(error.message)
        }).finally(() => setIsLoading(false))
    }

    // onAuthStateChanged Login and Logout state change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
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
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                const newUser = {email, displayName: name}
                setUser(newUser)
                // console.log(name, email)
                saveToUserData(name, email, "POST")
                console.log(user)
                // console.log(newUser)
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
            }).finally(() => setIsLoading(false))
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

    // save user to database 
    const saveToUserData = (name, email, method) => {
        const user = {name, email}
        // console.log(user)
        const url = `https://hidden-beyond-75856.herokuapp.com/users`
        fetch(url, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    // check headTeacher using email

    useEffect(() => {
        const url = `https://hidden-beyond-75856.herokuapp.com/users/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setHead(data.head)
            })
    }, [user?.email])



    return {
        user,
        error,
        isLoading,
        head,
        signInWithGoogle,
        signOutProcess,
        loginUsingEmailAndPassword,
        RegisterWithEmailAndPasswrod

    }
}

export default UseFirebase;