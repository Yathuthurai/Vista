import ARTICLE_POST from "../../Screens/data/Articles";
import { POST_ARTICLE, SET_ARTICLE } from "../Actions/articles";
import ArticlePost from "../../Models/ArticlePost";

const initialState = {
  allPosts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        allPosts: action.articles,
      };

    case POST_ARTICLE:
      const newPost = new ArticlePost(
        action.postData.id,
        "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
        "Harry",
        action.postData.createdAt,
        action.postData.title,
        action.postData.imageUrl,
        action.postData.description,
        "o1",
        action.postData.referenceLink
      );
      return {
        ...state,
        allPosts: state.allPosts.concat(newPost),
      };

    default:
      return state;
  }
};
