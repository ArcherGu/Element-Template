export function user (state) {
  return state.user;
}

export function myRouters (state) {
    return state.routers;
}

export function loggedIn (state) {
  return (state.user !== null);
}

export function gotRouters (state) {
    return (state.routers !== null);
}
