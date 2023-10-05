import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "pages/HomePage";
import { Login } from "pages/Login";
import { Register } from "pages/Register";



export const App = () => {
  return (
    <Routes>
      <Route path = "/" element = {Layout}>
        <Route index element = {HomePage}></Route>
        <Route path="register" element = {Register}></Route>
        <Route path="login" element = {Login}></Route>
      </Route>
    </Routes>
  );
};
