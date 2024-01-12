import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tweetArray: [
		{
			name: "Person 1",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "10 mins ago",
		},
		{
			name: "Person 2",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "50 mins ago",
		},
		{
			name: "Person 3",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "7 mins ago",
		},
		{
			name: "Person 4",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "26 mins ago",
		},
		{
			name: "Person 4",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "27 mins ago",
		},
		{
			name: "Person 1",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "34 mins ago",
		},
		{
			name: "Person 4",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "17 mins ago",
		},
		{
			name: "Person 1",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "45 mins ago",
		},
		{
			name: "Person 3",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "39 mins ago",
		},
		{
			name: "Person 2",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "11 mins ago",
		},
		{
			name: "Person 3",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "6 mins ago",
		},
		{
			name: "Person 1",
			content:
				"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, elit, sed do eiusmod.",
			time: "8 mins ago",
		},
	],
	personalTweet: [],
};
const tweetSlice = createSlice({
	name: "tweet",
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.personalTweet.unshift(action.payload);
		},
	},
});

export const { addTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
