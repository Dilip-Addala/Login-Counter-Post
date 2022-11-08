import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

const postsUrl = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
  posts:[],
  status:"idle",
  errMsg:null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts",async()=>{
  try{
    const response = await axios.get(postsUrl);
    // // console.log(response.data)
    // initialState.posts = response.data
    return [...response.data]
  }
  catch(error){
    return error.message
  }
})

export const PostSlice = createSlice({
  name: "posts",
  initialState
  // : {
    // postsList: [
    //   {
    //     id: nanoid(),
    //     title: "Frontend",
    //     description: "Works on UI",
    //     author: "Unknown",
    //     time: sub(new Date(), { minutes: 5 }).toISOString(),
    //     reactions: {
    //       thumbsup: 0,
    //       loveIt: 0,
    //       laugh: 0,
    //       fear: 0,
    //       shock: 0,
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Backend",
    //     description: "Works on server and database",
    //     author: "Unknown",
    //     time: sub(new Date(), { minutes: 10 }).toISOString(),
    //     reactions: {
    //       thumbsup: 0,
    //       loveIt: 0,
    //       laugh: 0,
    //       fear: 0,
    //       shock: 0,
    //     },
    //   },
    // ],
  // }
  ,
  reducers: {
    addPost: (state, action) => {
      // state.postsList.unshift(action.payload);
      state.posts.unshift(action.payload);
    },
    removePost: (state, action) => {
      const {postId} = action.payload
      // const updatesPostsList = state.postsList.filter(post => post.id !== postId)
      const updatesPostsList = state.posts.filter(post => post.id !== postId)
      state.postsList = updatesPostsList
    },
    addReactions: (state, action) => {
      const { postId, reaction } = action.payload;
      // const selectedPost = state.postsList.find((post) => post.id === postId);
      const selectedPost = state.posts.find((post) => post.id === postId);
      if (selectedPost) {
        selectedPost.reactions[reaction]++;
      }
    },
    extraReducers(builder){
      builder
      .addCase(fetchPosts.pending,(state)=>{
        console.log("pending triggered")
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled,(state,action)=>{
        console.log(action.payload)
        state.status = "succeeded"
        
        let min = 1;
        const loadedPost = action.payload.map(post=>{
          post.time = sub(new Date(),{minutes:min++}).toISOString();
          post.reactions = {
                  thumbsup: 0,
                  loveIt: 0,
                  laugh: 0,
                  fear: 0,
                  shock: 0,
                }
          return post
        })
        state.posts.push(loadedPost)
        // state.posts = state.posts.concat(loadedPost)
      })
      .addCase(fetchPosts.rejected,(state,action)=>{
        state.status = "failure"
        state.errMsg = action.error.message
      })
    }
  },
});

// export const allPosts = (state) => state.posts.postsList;
export const allPosts = (state) => state.posts.posts;
export const postStatus = (state) => state.posts.status;
export const postError = (state) => state.posts.errMsg;

export const { addPost, removePost, addReactions } = PostSlice.actions;

export default PostSlice.reducer;
