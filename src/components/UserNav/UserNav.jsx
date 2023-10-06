import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "redux/auth/selectors"


export const UserNav = () => {

    const userEmail = useSelector(selectUser).email;

    return(
        <>
            <Link to={'/'}>Home</Link>
            <div>
                <p>Hello, {userEmail}</p>
                <button>Log out</button>
            </div>
        </>
    )
}