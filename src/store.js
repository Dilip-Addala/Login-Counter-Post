import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Login-Signup/loginSignupSlice"
import counterReducer from "./counter/counterSlice"
import postReducer from "./blogpost/postSlice"

export default configureStore({
    reducer:{
        user:formReducer,
        counter:counterReducer,
        posts:postReducer
    }
})

