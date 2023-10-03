import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null);
const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) =>{
        setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
       
    }

    const createsignIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const userLogOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, (currentUser) =>{
        console.log("the observer of the current user", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        createUser,
        createsignIn,
        userLogOut,
        loading
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;