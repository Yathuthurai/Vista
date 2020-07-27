import { counterEvent } from "react-native/Libraries/Performance/Systrace";
import ArticlePost from "../../Models/ArticlePost";
export const POST_ARTICLE = "POST_ARTICLE";

export const SET_ARTICLE = "SET_ARTICLE";

export const setArticles = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://articlesharingsystem.firebaseio.com/articles.json"
    );

    const responseData = await response.json();
    const loadedArticles = [];
    for (const key in responseData) {
      loadedArticles.push(
        new ArticlePost(
          key,
          "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
          "Harry",
          responseData[key].createdAt,
          responseData[key].title,
          responseData[key].imageUrl,
          responseData[key].description,
          responseData[key].ownerId,
          responseData[key].referenceLink
        )
      );
    }
    dispatch({ type: SET_ARTICLE, articles: loadedArticles });
  };
};

export const postArtricles = (title, imageUrl, description, referenceLink) => {
  return async (dispatch) => {
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
          ownerId: "u1",
          createdAt,
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
        description,
        referenceLink,
        createdAt,
      },
    });
  };
};
