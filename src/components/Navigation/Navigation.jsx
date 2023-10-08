import { GuestNav } from "components/GuestNav/GuestNav";
import { UserNav } from "components/UserNav/UserNav";
import { useAuth } from "hooks/useAuth";

export const Navigation = () => {
  const isLogged = useAuth().isLogged;
    return (
     <>
      {isLogged 
        ? <UserNav/>
        : <GuestNav/>
      }
     </>
    );
  };