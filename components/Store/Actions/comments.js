import * as firebase from "firebase";
import Comments from "../../Models/Comments";

export const POST_COMMENT = "POST_COMMENT";
export const SET_COMMENT = "SET_COMMENT";

export const setComment = (articleId) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://articlesharingsystem.firebaseio.com/articles/${articleId}/comment.json`
    );

    const responseData = await response.json();
    const loadedComments = [];
    for (const key in responseData) {
      loadedComments.push(
        new Comments(
          key,
          responseData[key].userName,
          responseData[key].createdAt,
          responseData[key].comment,
          responseData[key].ownerId
        )
      );
    }
    dispatch({
      type: SET_COMMENT,
      comments: loadedComments,
    });
  };
};

export const postComments = (articleId, comment) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const userName = getState().auth.firstName + " " + getState().auth.lastName;

    const createdAt = new Date();
    const response = await fetch(
      `https://articlesharingsystem.firebaseio.com/articles/${articleId}/comment.json`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ownerId: userId,
          comment,
          userName,
          createdAt,
        }),
      }
    );

    const responseData = await response.json();

    console.log(responseData);

    dispatch({
      type: POST_COMMENT,
      postData: {
        id: responseData.name,
        userName,
        userId,
        comment,
        createdAt,
      },
    });
  };
};
