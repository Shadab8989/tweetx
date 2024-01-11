import { configureStore } from "@reduxjs/toolkit";
import followingReducer from '../features/following/followingSlice'

const store = configureStore({
    reducer:{
        following:followingReducer
    },
})

export default store