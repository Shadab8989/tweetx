import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	people: [],
	ourself: {
		name: "Shadab Khan",
		followers: 4,
		img: `${process.env.PUBLIC_URL}/images/default-person.png`,
	},
};

export const followingSlice = createSlice({
	name: "following",
	initialState,
	reducers: {
		follow: (state, action) => {
			state.people.push(action.payload);
		},
		unfollow: (state, action) => {
			state.people = state.people.filter(
				(person) => {
					if(action.payload.name){
						return person.name !== action.payload.name
					}
					else{return person.name !== action.payload}
					}
			);
		},
		updatePic: (state, action) => {
			state.ourself.img = action.payload;
		},
	},
});

export const { follow, unfollow, updatePic } = followingSlice.actions;
export default followingSlice.reducer;
