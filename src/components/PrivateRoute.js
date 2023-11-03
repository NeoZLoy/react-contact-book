import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, retidrectTo = '/'}) => {
    const isLogged = useAuth().isLogged;
   
    return !isLogged ? <Navigate to = {retidrectTo}/> : Component;
}