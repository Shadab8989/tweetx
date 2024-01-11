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
	personalTweet: 0,
};
const tweetSlice = createSlice({
	name: "tweet",
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.tweetArray.push(action.payload);
			state.personalTweet += 1;
			// const sortFunction = (obj1, obj2) => {
			// 	let t1, t2;
			// 	obj1.time[1] !== " "
			// 		? (t1 = obj1.time.slice(0, 2))
			// 		: (t1 = obj1.time.slice(0, 1));
			// 	obj2.time[1] !== " "
			// 		? (t2 = obj2.time.slice(0, 2))
			// 		: (t2 = obj2.time.slice(0, 1));

			// 	return Number(t1) - Number(t2);
			// };
            // state.tweetArray.sort((a,b) =>sortFunction(a,b))
		},
	},
});

export const { addTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
