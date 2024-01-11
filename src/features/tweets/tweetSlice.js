import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweetArray:{}
}
const tweetSlice = createSlice({
    name:'tweetSlice',
    initialState,
    reducers:{
        addTweet:(state,action) => {
            state.tweetArray.push(action.payload)
        }
    }
})

export const {addTweet} = tweetSlice.actions
export default tweetSlice.reducer
