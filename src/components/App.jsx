import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "pages/HomePage";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";

export const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
   <>
    <Routes>
      <Route path = "/" element = {<Layout/>}>
        <Route index element = {<HomePage/>}></Route>
        <Route path="signup" element = {<Register/>}></Route>
        <Route path="login" element = {<Login/>}></Route>
      </Route>
    </Routes>
   </>
  );
};
