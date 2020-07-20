import ARTICLE_POST from "../../Screens/data/Articles";

const initialState = {
  allPosts: ARTICLE_POST,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
