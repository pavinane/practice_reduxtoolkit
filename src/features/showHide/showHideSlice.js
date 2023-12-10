import {createSlice} from '@reduxjs/toolkit';

const initialState={
    show:false
}

export const showHideReducer = createSlice({
    name:'showHide',
    initialState,
    reducers:{
        displayImage:(state) => {
            state.show = !state.show
        } 
    }
});

export const {displayImage} = showHideReducer.actions;
export const DisplayShowImage = (state) =>state.displayData.show
export default showHideReducer.reducer 