export const selectUser = state =>state.auth.user;
export const selectIsLogged = state => state.auth.isLogged;
export const selectIsRefreshing = state =>  state.auth.isRefreshing;
export const selectIsLoading = state => state.auth.isLoading;
