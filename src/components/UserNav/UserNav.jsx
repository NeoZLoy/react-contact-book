import { useDispatch, useSelector } from "react-redux";
import { NavLink, } from "react-router-dom";
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors"


export const UserNav = () => {

    const userName = useSelector(selectUser).name;
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOut())
   
    }

    return(
        <>
            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/contacts'}>Contacts</NavLink>
            </div>
            <div>
                <p>Hello, {userName}</p>
                <button onClick={handleLogOut}>Log out</button>
            </div>
        </>
    )
}