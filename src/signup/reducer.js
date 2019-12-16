const initialState = {
  jwt: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER_SIGN_UP": {
      return { ...state, jwt: action.payload };
    }
    default: {
      return state;
    }
  }
}
