import { createSlice} from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name:"counter",
    initialState: {
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count -= 1;
        },
        incrementAmount:(state,action)=>{
            state.count += action.payload;
        },
        reset:(state)=>{
            state.count = 0;
        }
    }
})

export const {increment, decrement,incrementAmount,reset} = formSlice.actions;

export default formSlice.reducer;


// export const selectUser = state => state.user.user;


