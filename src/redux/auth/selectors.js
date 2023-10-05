export const selectUser = state.auth.user;
export const selectIsLogged = state.auth.isLogged;
export const selectIsRefreshing = state.auth.isRefreshing;
export const selectAuthInfo = state => {
    return { 
        user: state.auth.user,
        isLogged: state.auth.isLogged,
        isRefreshing: state.auth.isRefreshing
    }
}