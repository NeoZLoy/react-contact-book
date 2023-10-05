import { selectUser } from "redux/auth/selectors"

const userEmail = selectUser.email;

export const UserNav = () => {
    return(
        <div>
            <p>Hello, {userEmail}</p>
            <button>Log out</button>
        </div>
    )
}