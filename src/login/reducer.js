const initialState = {
  jwt: null,
  name: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return {
        ...state,
        jwt: action.payload.jwt,
        name: action.payload.name
      };
    }
    default: {
      return state;
    }
  }
}
