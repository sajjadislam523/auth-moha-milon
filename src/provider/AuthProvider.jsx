import { createContext } from "react";
import PropTypes from "propTypes";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const authInfo = {
        name: "Nodir buk e jol",
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
};
export default AuthProvider;

/***
 * 1. Create context with null value
 * 2. Create provider
 * 3. set a value with something (authInfo)
 * 4. [Attention please!!!]
 * 5. use the authProvider in the main.jsx
 * 6. access the children inside the authProvider in the main.jsx
 * 7. export the AuthContext
 */
