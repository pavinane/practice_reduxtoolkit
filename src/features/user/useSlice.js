import {createSlice} from '@reduxjs/toolkit';

const initialState=[
    {
        id:0,name:"Pavimegan"
    },
    {
        id:1,name:'KarKee'
    },
    {
        id:2, name:'vaishuselva'
    }
]


export const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{}

});

export const SelectUser = (state)=> state.userData
export default userSlice.reducer
