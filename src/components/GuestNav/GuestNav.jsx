import { Link, NavLink } from "react-router-dom"

export const GuestNav = () => {
    return(
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>           
                <NavLink to={"/signup"}>Register</NavLink>
            </li>
            <li>
                <NavLink to={"/login"}>Log in</NavLink>
            </li>
        </ul>
    )
}