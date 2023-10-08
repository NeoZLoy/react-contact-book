import { selectIsLogged, selectIsRefreshing, selectUser } from "redux/auth/selectors";

const { useSelector } = require("react-redux");

export const useAuth = () => {
    return{
        isLogged: useSelector(selectIsLogged),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
    }
}