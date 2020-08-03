import { LOGIN, SIGNUP } from "../Actions/auth";

const initialState = { token: null, userId: null, firstName: "", lastName: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
    case LOGIN:
      console.log(action);
      return {
        token: action.token,
        userId: action.userId,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    default:
      return state;
  }
};
