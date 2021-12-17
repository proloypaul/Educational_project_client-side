import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from './UseAuth';

const PrivateRouter = ({children, ...rest}) => {
    const {user} = UseAuth()
    const location = useLocation()
    
    if(user.email){
        return children;   
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRouter;