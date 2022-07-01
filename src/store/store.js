import {configureStore} from '@reduxjs/toolkit';
import postReducer from '../features/postSlice';
//Global Store

export const store = configureStore({
    reducer:{
        blogPost: postReducer
    }
})