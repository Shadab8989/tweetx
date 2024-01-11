import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tweetArray: [{ name: "Person 1", 
    content: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.", time: "10 mins ago" },
    { name: "Person 2", 
    content: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.", time: "10 mins ago" },
    { name: "Person 3", 
    content: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.", time: "10 mins ago" },
    { name: "Person 4", 
    content: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.", time: "10 mins ago" },
    { name: "Person 1", 
    content: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.", time: "10 mins ago" },
    { name: "Person 1", 
    content: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.", time: "10 mins ago" },
    { name: "Person 1", 
    content: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.", time: "10 mins ago" }],
};
const tweetSlice = createSlice({
	name: "tweet",
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.tweetArray.push(action.payload);
		},
	},
});

export const { addTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
