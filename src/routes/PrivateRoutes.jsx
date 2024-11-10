/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading)
        return <span className="loading loading-spinner text-success"></span>;

    if (user) {
        return children;
    }

    return <Navigate to="/login" />;
};

export default PrivateRoutes;
