import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import usePublicAxios from "../Hooks/usePublicAxios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
export default function AuthProvider({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const useAxios = usePublicAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // setLoading(false);
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { name: currentUser.name, email: currentUser.email };
        useAxios.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);
  const authValue = {
    user,
    loading,
    createUser,
    googleLogIn,
    userLogIn,
    userLogOut,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
