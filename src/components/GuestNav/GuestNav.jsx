import { Link } from "react-router-dom"

export const GuestNav = () => {
    return(
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>           
                <Link to={"/signup"}>Register</Link>
            </li>
            <li>
                <Link to={"/login"}>Log in</Link>
            </li>
        </ul>
    )
}