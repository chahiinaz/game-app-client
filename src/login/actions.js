import api from "../api";

export function login(name, password) {
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        name: name,
        password: password
      }
    })
      .then(data => {
        dispatch(userLoggedIn(data.jwt, data.name));
      })
      .catch(err => console.log("Error!", err));
  };
}

// An action creator
export function userLoggedIn(jwt, name) {
  return {
    type: "USER_LOGGED_IN",
    payload: { jwt, name }
  };
}
