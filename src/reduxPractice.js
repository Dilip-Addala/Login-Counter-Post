import {createStore} from "redux"
// import { configureStore, createSlice} from "@reduxjs/toolkit"

// const slice = createSlice({
//     name:"counter",
//     initialState: {
//         value: 0
//     },
//     reducers:{
//         increment : state => {state.value += 1},
//         decrement : state => {state.value -= 1}
//     }
// })

// const store = configureStore({
//     reducer: slice.reducers 
// })

// export const {increment, decrement} = slice.actions

// store.subscribe(()=>console.log(store.getState()))

// store.dispatch(increment())
// store.dispatch(decrement())



function RootReducer(state={value:0},action) {
    switch (action.type) {
    case "increment":
      return {value: state.value + 1}
      case "decrement":
      return {value: state.value - 1}
      default:
      return state
}
}

let store = createStore(RootReducer)

store.subscribe(()=>console.log(store.getState()))

store.dispatch({type: "increment"})
store.dispatch({type: "increment"})

export default RootReducer
