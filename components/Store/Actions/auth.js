export const SIGNUP = "SIGNUP";

export const LOGIN = "LOGIN";

export const signUp = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDu-C0RS54RvnNvovF5v47G8Wts251JNTY",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      const errorId = errorData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_EXISTS") {
        message = "This email address already exists!";
      }
      throw new Error(message);
    }

    const responseData = await response.json();
    console.log(responseData);
  };
};

export const logIn = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDu-C0RS54RvnNvovF5v47G8Wts251JNTY",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      const errorId = errorData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_NOT_FOUND" || errorId === "INVALID_PASSWORD") {
        message = "Invalid email address or password!";
      }
      throw new Error(message);
    }

    const responseData = await response.json();
    console.log(responseData);
  };
};
