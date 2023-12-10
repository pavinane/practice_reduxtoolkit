import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import { addTodo } from './todoSlice';
import {SelectUser} from '../user/useSlice'

function AddPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId,setUserId] = useState('');

    const dispatch = useDispatch();
    const userSelect = useSelector(SelectUser);

    const handleTitle = e => setTitle(e.target.value);
    const handleContent = e => setContent(e.target.value);
    const authorSelect =e => setUserId(e.target.value)

    
    const handleSubmit = () => {
        console.log(title,content,"datas")
        if (title && content) {
            dispatch(
                addTodo(title,content,userId),
            );
            setTitle('');
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const ListUser = userSelect.map((list) => {
        return(
            <option key={list.id} value={list.id}>{list.name}</option>
        )
    })

    return (
        <div>
            <p>Add a New Post</p>
            <form>
                <label htmlFor="title">Post Title</label>
                <input type="text"
                    placeholder='Enter Title'
                    name="title"
                    id="title"
                    value={title}
                    onChange={handleTitle}
                />
                <label htmlFor="selectAuthor">Select Author</label>
                <select id="selectAuthor" value={userId} onChange={authorSelect}>
                    <option value="select">Select</option>
                    {ListUser}
                </select>
                <label htmlFor="content">Post Content</label>
                <textarea type="text"
                    name="content"
                    id="content"
                    value={content}
                    onChange={handleContent}
                />
                <button type='button' onClick={handleSubmit}
                disabled={!canSave}
                >Post</button>
            </form>
        </div>
    )
}

export default AddPost