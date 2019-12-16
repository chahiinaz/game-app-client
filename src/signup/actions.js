import api from "../api";

export function signUpSuccess(jwt) {
  return {
    type: "USER_SIGN_UP",
    payload: jwt
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
        const action = signUpSuccess(data.jwt);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
