import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('reddit/getPosts', async (subreddit) => {
  const response = await fetch(`https://www.reddit.com/${subreddit}.json`);
  const json = await response.json();
  return json.data.children.map((post) => post.data);
});

const sliceOptions = {
  name: 'reddit',
  initialState: {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/home',
  },
  reducers: {
    updateSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.posts = action.payload;
      });
  },
};

const redditSlice = createSlice(sliceOptions);

export const selectPosts = (state) => state.reddit.posts;
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;
export const selectIsLoading = (state) => state.reddit.isLoading;

export const { updateSelectedSubreddit } = redditSlice.actions;

export default redditSlice.reducer;
