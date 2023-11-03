import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "pages/HomePage";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { Contacts } from "pages/Contacts";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

export const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useAuth().isRefreshing
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  

  return (
   <>
    {!isRefreshing && (
      <Routes>
       <Route path = "/" element = {<Layout/>}>
         <Route index element = {<HomePage/>}></Route>
         <Route path="signup" element = {
            <RestrictedRoute redirectTo="/contacts" component = {<Register/>}/>
          }> 
          </Route>
         <Route path="login" element = {
          <RestrictedRoute redirectTo="/contacts" component = {<Login/>}/>
          }>
        </Route>
        <Route path="contacts" element = {
          <PrivateRoute retidrectTo = "/" component = { <Contacts/> }/>
          }>
        </Route>
       </Route>
      </Routes>
    )
     
    }
   </>
  );
};
