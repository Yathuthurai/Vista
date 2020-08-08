//import { counterEvent } from "react-native/Libraries/Performance/Systrace";
import ArticlePost from "../../Models/ArticlePost";
import * as firebase from "firebase";

export const POST_ARTICLE = "POST_ARTICLE";
export const SET_ARTICLE = "SET_ARTICLE";
export const DELETE_ARTICLES = "DELETE_ARTICLES";
export const UPDATE_ARTICLES = "UPDATE_ARTICLES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const SET_FAVORITES = "SET_FAVORITES";

export const setArticles = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await fetch(
      "https://articlesharingsystem.firebaseio.com/articles.json"
    );

    const responseData = await response.json();
    const loadedArticles = [];
    for (const key in responseData) {
      loadedArticles.push(
        new ArticlePost(
          key,
          responseData[key].avatar,
          responseData[key].userName,
          responseData[key].createdAt,
          responseData[key].title,
          responseData[key].imageUrl,
          responseData[key].description,
          responseData[key].ownerId,
          responseData[key].referenceLink
        )
      );
    }
    dispatch({
      type: SET_ARTICLE,
      articles: loadedArticles,
      myArticles: loadedArticles.filter(
        (article) => article.ownerId === userId
      ),
    });
  };
};

export const postArtricles = (title, imageUrl, description, referenceLink) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const userName = getState().auth.firstName + " " + getState().auth.lastName;
    const avatar = getState().auth.profilePicture;

    const createdAt = new Date();
    const response = await fetch(
      "https://articlesharingsystem.firebaseio.com/articles.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          imageUrl,
          description,
          referenceLink,
          ownerId: userId,
          userName,
          createdAt,
          avatar,
        }),
      }
    );

    const responseData = await response.json();

    dispatch({
      type: POST_ARTICLE,
      postData: {
        id: responseData.name,
        title,
        imageUrl,
        userName,
        userId,
        description,
        referenceLink,
        createdAt,
        avatar,
      },
    });
  };
};

export const deleteArtricles = (articleId) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://articlesharingsystem.firebaseio.com/articles/${articleId}.json`,
      { method: "DELETE" }
    );
    if (!response.ok) {
      throw new Error("Something went wrong..");
    }
    dispatch({ type: DELETE_ARTICLES, articleId });
  };
};

export const updateArtricles = (
  id,
  title,
  imageUrl,
  description,
  referenceLink
) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const userName = getState().auth.firstName + " " + getState().auth.lastName;
    const createdAt = new Date();
    const avatar = getState().auth.profilePicture;
    const response = await fetch(
      `https://articlesharingsystem.firebaseio.com/articles/${id}.json`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          imageUrl,
          description,
          referenceLink,
          createdAt,
          avatar,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    dispatch({
      type: UPDATE_ARTICLES,
      postData: {
        id,
        title,
        imageUrl,
        userName,
        description,
        referenceLink,
        createdAt,
        avatar,
      },
    });
  };
};

export const addToFavorite = (articleId) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const article = getState().article.allPosts.find(
      (article) => article.id === articleId
    );

    const query = firebase
      .database()
      .ref(`users/${userId}/favorites/${articleId}`);
    query.once("value", (snapshot) => {
      if (snapshot.exists()) {
        query.remove();
      } else {
        query.set({
          title: article.title,
          imageUrl: article.imgUrl,
          description: article.description,
          referenceLink: article.referenceLink,
          ownerId: article.ownerId,
          userName: article.owner,
          createdAt: article.moment,
        });
      }
    });

    dispatch({ type: ADD_FAVORITES, articleId });
  };
};

export const fetchFavorite = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://articlesharingsystem.firebaseio.com/users/${userId}/favorites.json`
    );
    const responseData = await response.json();
    const loadedArticles = [];
    for (const key in responseData) {
      loadedArticles.push(
        new ArticlePost(
          key,
          "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
          responseData[key].userName,
          responseData[key].createdAt,
          responseData[key].title,
          responseData[key].imageUrl,
          responseData[key].description,
          responseData[key].ownerId,
          responseData[key].referenceLink
        )
      );
    }
    dispatch({
      type: SET_FAVORITES,
      articles: loadedArticles,
    });
  };
};
