import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  success: false,
  posts: [],
  post: {},
};

export const fetchPosts = createAsyncThunk("blog/post", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);

    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data) || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchPost = createAsyncThunk(
  "get/blog/post",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts/${id}`
      );

      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data) || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // fetchPost: (state, action) => {
    //   const postArr = state.posts.map((post) => post.id === action.payload);
    //   // state.post = postArr.length > 0 ? postArr[0] : {};
    //   state.post = postArr
    //   console.log(state.post);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.posts = action.payload;
      })
      .addCase(fetchPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.post = action.payload;
      });
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
