import React, { useContext, useState, useEffect } from "react"
import { auth } from "../auth_config/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import userAccountService from "../services/UserAccountService";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  function signupUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logoutUser() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      if(user != null){
        userAccountService.getUserId(user.uid)
        .then((useraccount) => {
          setCurrentUserId(useraccount.data.id);
        })
        .catch((error) => {
          setCurrentUserId(null);
        });
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    currentUserId,
    signInUser,
    signupUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}