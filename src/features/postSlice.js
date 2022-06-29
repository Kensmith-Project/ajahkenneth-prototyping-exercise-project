import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  success: false,
  posts: [],
  post: {},
};

export const fetchPosts = createAsyncThunk('blog/post', async(_, thunkAPI)=>{
    try{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
        
        return response.data
    }catch(error){

        const message = error.response && error.response.data || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
})




export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        fetchPost: (state, action)=>{
            console.log(state.posts)
            const postArr = state.posts.map(post => post.id === action.payload);
            state.post = postArr.length > 0 ? postArr[0]: {};
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending, (state)=>{
            state.loading = true
        })
        .addCase(fetchPosts.rejected, (state, action)=>{
            state.error = true;
            state.loading = false;
            state.message = action.payload 

            console.log(action.payload)

        })
        .addCase(fetchPosts.fulfilled, (state, action)=>{
            state.loading = false;
            state.success = true;
            state.posts = action.payload;
        })
    }

})


export const {fetchPost} = postSlice.actions;

export default postSlice.reducer;