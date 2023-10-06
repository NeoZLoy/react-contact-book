import { GuestNav } from "components/GuestNav/GuestNav";
import { UserNav } from "components/UserNav/UserNav";
import { useSelector } from "react-redux";
import { selectAuthInfo } from "redux/auth/selectors";

export const Navigation = () => {
  const authData = useSelector(selectAuthInfo)

    return (
     <>
      {authData.isLogged 
        ? <UserNav/>
        : <GuestNav/>
      }
     </>
    );
  };