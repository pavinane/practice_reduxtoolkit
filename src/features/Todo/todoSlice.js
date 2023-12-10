import {createSlice,nanoid} from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState ={
    todoList:[],
    status:'idle',
    error:null
}
 

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:{
            reducer(state,action) {
                state.todoList.push(action.payload)
            },
            prepare(title, content,userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date:new Date().toISOString(),
                        reactions:{
                            thumbsup:0,
                            like:0,
                            rocket:0,
                            coffee:0
            
                        }
                    }
                }
            }
        },
        
        reactionsAdd(state, action){
            const {postId, reaction} = action.payload;
            const existingPost = state.todoList.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        },
        
        DeletePost:(state,action) => {
            state.filter((todo) => todo.id !== action.payload)
        }
    }
})


// to make a simple way of map function declarer value
export const selectAllPost = (state) =>state.postData.todoList

export const {addTodo,DeletePost,reactionsAdd} = todoSlice.actions;

export default todoSlice.reducer;