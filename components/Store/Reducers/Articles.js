import ARTICLE_POST from "../../Screens/data/Articles";
import {
  ADD_FAVORITES,
  DELETE_ARTICLES,
  POST_ARTICLE,
  SET_ARTICLE,
  SET_FAVORITES,
  UPDATE_ARTICLES,
} from "../Actions/articles";
import ArticlePost from "../../Models/ArticlePost";

const initialState = {
  allPosts: [],
  myPosts: [],
  favPosts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        ...state,
        allPosts: action.articles,
        myPosts: action.myArticles,
      };

    case POST_ARTICLE:
      const newPost = new ArticlePost(
        action.postData.id,
        action.postData.avatar,
        action.postData.userName,
        action.postData.createdAt,
        action.postData.title,
        action.postData.imageUrl,
        action.postData.description,
        action.postData.userId,
        action.postData.referenceLink
      );
      return {
        ...state,
        allPosts: state.allPosts.concat(newPost),
        myPosts: state.myPosts.concat(newPost),
      };

    case DELETE_ARTICLES:
      return {
        ...state,
        allPosts: state.allPosts.filter((post) => post.id !== action.articleId),
        myPosts: state.myPosts.filter((post) => post.id !== action.articleId),
      };

    case UPDATE_ARTICLES:
      const articleId = state.allPosts.findIndex(
        (post) => post.id === action.postData.id
      );
      const updateArticle = new ArticlePost(
        action.postData.id,
        action.postData.avatar,
        state.allPosts[articleId].owner,
        action.postData.createdAt,
        action.postData.title,
        action.postData.imageUrl,
        action.postData.description,
        state.allPosts[articleId].ownerId,
        action.postData.referenceLink
      );

      console.log(updateArticle);

      const updatedAllPosts = [...state.allPosts];
      updatedAllPosts[articleId] = updateArticle;

      const updatedMyPosts = [...state.myPosts];
      updatedMyPosts[articleId] = updateArticle;

      return {
        ...state,
        allPosts: updatedAllPosts,
        //myPosts: updatedMyPosts,
      };

    case ADD_FAVORITES:
      console.log(state.favPosts);
      const existingIndex = state.favPosts.findIndex(
        (post) => post.id === action.articleId
      );
      if (existingIndex >= 0) {
        const updateFavPosts = [...state.favPosts];
        updateFavPosts.splice(existingIndex, 1);
        return {
          ...state,
          favPosts: updateFavPosts,
        };
      } else {
        const post = state.allPosts.find(
          (post) => post.id === action.articleId
        );
        return {
          ...state,
          favPosts: state.favPosts.concat(post),
        };
      }
    case SET_FAVORITES:
      return {
        ...state,
        favPosts: action.articles,
      };

    default:
      return state;
  }
};
