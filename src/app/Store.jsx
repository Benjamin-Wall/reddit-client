import { configureStore } from "@reduxjs/toolkit";

import redditSliceReducer from "../Features/reddit/redditSlice";
import subredditsSliceReducer from "../Features/subreddits/subredditsSlice";

export default configureStore({
  reducer: {
    reddit: redditSliceReducer,
    subreddit: subredditsSliceReducer,
  },
});
