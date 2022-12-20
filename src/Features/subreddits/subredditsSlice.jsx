import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSubreddits = createAsyncThunk("subreddits", async () => {
  const response = await fetch(`https://www.reddit.com/subreddits.json`);
  const json = await response.json();
  return json.data.children.map((subreddit) => subreddit.data);
});

const sliceOptions = {
  name: "subreddits",
  initialState: {
    subreddits: [],
    error: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubreddits.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getSubreddits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.subreddits = action.payload;
      });
  },
};

const subredditsSlice = createSlice(sliceOptions);

export const selectSubreddits = (state) => state.subreddit.subreddits;
export const selectIsLoading = (state) => state.subreddit.isLoading;

export default subredditsSlice.reducer;
