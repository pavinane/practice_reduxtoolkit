import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter:0
}


const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
           state.counter += 1;
        },
        decrement:(state) => {
            state.counter -= 1;
        },
        reset:(state) => {
            state.counter = 0
        },
        incrementByAmount:(state,action)=>{
            state.counter += action.payload
        }

    }
})


export const{increment,decrement,reset,incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer