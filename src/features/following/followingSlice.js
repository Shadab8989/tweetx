import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people:[],
    ourself:{name:"Shadab Khan",followers:4}
}

export const followingSlice = createSlice({
    name:'following',
    initialState,
    reducers:{
        follow: (state,action) => {
            state.people.push(action.payload)
        },
        unfollow:(state,action) =>{
            state.people = state.people.filter((person) => person.name !== action.payload.name)
        }
    }
})

export const {follow,unfollow} = followingSlice.actions
export default followingSlice.reducer