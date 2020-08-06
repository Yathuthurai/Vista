import Comments from "../../Models/Comments";
import { POST_COMMENT, SET_COMMENT } from "../Actions/comments";

const initialState = {
  allComments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT:
      return {
        allComments: action.comments,
      };

    case POST_COMMENT:
      const newComment = new Comments(
        action.postData.id,
        action.postData.userName,
        action.postData.createdAt,
        action.postData.comment,
        action.postData.userId
      );
      return {
        ...state,
        allComments: state.allComments.concat(newComment),
      };

    // case DELETE_ARTICLES:
    //   return {
    //     ...state,
    //     allPosts: state.allPosts.filter((post) => post.id !== action.articleId),
    //     myPosts: state.myPosts.filter((post) => post.id !== action.articleId),
    //   };

    // case UPDATE_ARTICLES:
    //   const articleId = state.allPosts.findIndex(
    //     (post) => post.id === action.postData.id
    //   );
    //   const updateArticle = new ArticlePost(
    //     action.postData.id,
    //     "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
    //     state.allPosts[articleId].owner,
    //     action.postData.createdAt,
    //     action.postData.title,
    //     action.postData.imageUrl,
    //     action.postData.description,
    //     state.allPosts[articleId].ownerId,
    //     action.postData.referenceLink
    //   );

    //   console.log(updateArticle);

    //   const updatedAllPosts = [...state.allPosts];
    //   updatedAllPosts[articleId] = updateArticle;

    //   const updatedMyPosts = [...state.myPosts];
    //   updatedMyPosts[articleId] = updateArticle;

    //   return {
    //     ...state,
    //     allPosts: updatedAllPosts,
    //     //myPosts: updatedMyPosts,
    //   };

    default:
      return state;
  }
};
