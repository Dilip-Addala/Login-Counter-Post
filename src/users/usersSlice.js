import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  usersList: []
};

const usersUrl = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = createAsyncThunk("users/fetchUsers",async()=>{
  try{
    const response = await axios.get(usersUrl)
  return response.data
  }catch(error){
    return error.message
  }
  
})

export const UsersSlice = createSlice({
  name: "postUsers",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(fetchUsers.fulfilled,(state,action)=>{
      state.usersList = state.usersList.concat(action.payload)
    })
  }
});

export const postUsersList = (state) => state.postUsers.usersList;

export default UsersSlice.reducer;
