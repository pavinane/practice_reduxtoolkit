import React from 'react';
import {useSelector} from 'react-redux'
import { selectAllPost } from './todoSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeDate';
import ReactionsButtons from './ReactionsButton';

export const TodoList = () => {
    const post = useSelector(selectAllPost);
    
    const orderedPost = post.slice().sort((a,b) =>b.date.localeCompare(a.date))

    const renderPost = orderedPost.map((item) => {
        console.log('postDeta',item)
        return (
            <article key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content.slice(0, 100)}</p>     {/* slice or substring both are same syntax */}
                
                <div style={{display:'flex'}}>

                <PostAuthor userId={item.userId} />
                <TimeAgo timeStamp={item.date}/>
                </div>
                <div>
                    <ReactionsButtons post={item}/>
                </div>
             

            </article>
        )
    }
    );
  
    return (
    <div>
        <h2>Todo</h2>
        {renderPost}
    </div>
  )
}
