export const selectUser = state =>state.auth.user;
export const selectIsLogged = state => state.auth.isLogged;
export const selectIsRefreshing = state =>  state.auth.isRefreshing;
export const selectAuthInfo = state => {
    return { 
        user: state.auth.user,
        isLogged: state.auth.isLogged,
        isRefreshing: state.auth.isRefreshing
    }
}