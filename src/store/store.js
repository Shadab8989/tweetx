import { configureStore } from "@reduxjs/toolkit";
import followingReducer from '../features/following/followingSlice'
import tweetReducer from "../features/tweets/tweetSlice";

const store = configureStore({
    reducer:{
        following:followingReducer,
        tweets:tweetReducer,
    },
})

export default store