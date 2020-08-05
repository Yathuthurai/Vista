import { AUTHENTICATE, TRYAUTOLOGIN } from "../Actions/auth";

const initialState = {
  token: null,
  userId: null,
  firstName: "",
  lastName: "",
  tryAutoLogin: false,
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
      };

    case TRYAUTOLOGIN:
      return {
        ...state,
        tryAutoLogin: true,
      };
    default:
      return state;
  }
};
