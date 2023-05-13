import { createContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./../Firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const creatUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (creatUser) => {
      setUser(creatUser);
      console.log("current user ", creatUser);
      setLoding(false);
      if (creatUser && creatUser.email) {
        const logedUser = {
          email: creatUser.email,
        };
        fetch(`https://car-doctor-server-project.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(logedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt token", data);
            localStorage.setItem("car-doctore-access-token", data.token);
          });
      } else {
        localStorage.removeItem("car-doctore-access-token");
      }
    });
    return () => {
      return unsbscribe();
    };
  }, []);
  const authInfo = {
    user,
    loding,
    creatUser,
    singIn,
    logOut,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
