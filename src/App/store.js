import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import toggleReducer from '../features/Toggle/toggleSlice';
import showHideReducer from '../features/showHide/showHideSlice'
import todoReducer from '../features/Todo/todoSlice';
import userReducer from '../features/user/useSlice';

export const store = configureStore({
    reducer:{
        counterData: counterReducer,
        toggleData:toggleReducer,
        displayData:showHideReducer,
        postData:todoReducer,
        userData:userReducer
    }
})