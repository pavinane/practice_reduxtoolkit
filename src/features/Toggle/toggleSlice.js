import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    toggler:"one"
}


const toggleSlice = createSlice({
    name:"togglers",
    initialState,
    reducers:{
        oneBtn:(state)=>{
            state.toggler ="one"
        },
        twoBtn:(state)=>{
            state.toggler ="two"
        },
        threeBtn:(state)=>{
            state.toggler ="three"
        },
    }

    
});


export const {oneBtn,twoBtn,threeBtn} = toggleSlice.actions;

export default toggleSlice.reducer