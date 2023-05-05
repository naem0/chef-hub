import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

// PraivatRoute

const PraivatRoute = ({children}) => {
    const{user}= useContext(AuthContext);
    const location = useLocation();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56 mx-auto"></progress>
    }

    

    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
};

export default PraivatRoute;