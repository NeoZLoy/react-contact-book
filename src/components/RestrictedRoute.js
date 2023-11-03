import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = '/contacts'}) => {
    const isLogged = useAuth().isLogged;

    return isLogged ? <Navigate to ={redirectTo}/> : Component;
}