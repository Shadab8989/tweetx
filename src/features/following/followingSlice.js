import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people:[{name:"Shadab Khan",followers:"511"}]
}

export const followingSlice = createSlice({
    name:'following',
    initialState,
    reducers:{
        follow: (state,action) => {
            state.people.push(action.payload)
            console.log(state.people)
        },
        unfollow:(state,action) =>{
            state.people = state.people.filter((person) => person.name !== action.payload.name)
        }
    }
})

export const {follow,unfollow} = followingSlice.actions
export default followingSlice.reducer