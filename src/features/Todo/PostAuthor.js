import React from 'react';
import {SelectUser} from '../user/useSlice';
import {useSelector} from 'react-redux'

function PostAuthor({userId}) {

const AuthorUser = useSelector(SelectUser);
const UserName = AuthorUser.find(user => user.id == userId)
console.log(AuthorUser,UserName,"findauthor")


  return (
    <div>
        <span>By {UserName ? UserName.name :"UnKnown Author"}</span>
    </div>
  )
}

export default PostAuthor