import { AUTHENTICATE, LOGOUT, TRYAUTOLOGIN } from "../Actions/auth";

const initialState = {
  token: null,
  userId: null,
  firstName: "",
  lastName: "",
  tryAutoLogin: false,
  email: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      console.log(action);
      return {
        token: action.token,
        userId: action.userId,
        firstName: action.firstName,
        lastName: action.lastName,
        tryAutoLogin: true,
        email: action.email,
      };

    case TRYAUTOLOGIN:
      return {
        ...state,
        tryAutoLogin: true,
      };
    case LOGOUT:
      return {
        ...initialState,
        tryAutoLogin: true,
      };
    default:
      return state;
  }
};
