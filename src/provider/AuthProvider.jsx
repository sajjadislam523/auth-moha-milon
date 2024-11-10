import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import auth from "../firebase/firebase.conf";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const name = "nodir buk e jol";

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        auth.signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("Currently logged in", currentUser);
                setUser(currentUser);
            }
            return () => {
                unSubscribe();
            };
        });
    }, []);

    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
        signOutUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
};
/***
 * 1. Create context with null value
 * 2. Create provider
 * 3. set a value with something (authInfo)
 * 4. [Attention please!!!]
 * 5. use the authProvider in the main.jsx
 * 6. access the children inside the authProvider in the main.jsx
 * 7. export the AuthContext
 */
