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
        dispatch(userLoggedIn(data.jwt, data.name, data.id));
      })
      .catch(err => console.log("Error!", err));
  };
}

// An action creator
export function userLoggedIn(jwt, name, id) {
  return {
    type: "USER_LOGGED_IN",
    payload: { jwt, name, id }
  };
}

export function signUpSuccess(jwt, name) {
  return {
    type: "USER_SIGN_UP",
    payload: { jwt, name }
  };
}

export function signUp(name, password) {
  return function thunk(dispatch, getState) {
    api("/signup", {
      method: "POST",
      body: {
        name: name,
        password: password
      }
    })
      .then(data => {
        const action = signUpSuccess(data.jwt, data.name, data.id);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
