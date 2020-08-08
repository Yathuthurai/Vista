import {
  AUTHENTICATE,
  DELETE_ACCOUNT,
  LOGOUT,
  SELECT_IMAGE,
  TRYAUTOLOGIN,
} from "../Actions/auth";

const initialState = {
  token: null,
  userId: null,
  firstName: "",
  lastName: "",
  tryAutoLogin: false,
  email: "",
  profilePicture: null,
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
        profilePicture: action.url,
      };

    case TRYAUTOLOGIN:
      return {
        ...state,
        tryAutoLogin: true,
      };
    case LOGOUT:
    case DELETE_ACCOUNT:
      return {
        ...initialState,
        tryAutoLogin: true,
      };
    case SELECT_IMAGE:
      return {
        ...initialState,
        profilePicture: action.url,
      };

    default:
      return state;
  }
};
