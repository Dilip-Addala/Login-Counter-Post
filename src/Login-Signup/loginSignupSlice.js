import {createSlice} from "@reduxjs/toolkit"

export const usersSlice = createSlice({
    name:"users",
    initialState:{
        details:{}
    },
    reducers:{
        login:(state,action)=>{
            state.details = action.payload
        },
        signup:(state,action)=>{
            state.details = action.payload
        }
    }
})

export const {login,signup} = usersSlice.actions 

export default usersSlice.reducer