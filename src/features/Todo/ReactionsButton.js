import {useDispatch} from 'react-redux';
import { reactionsAdd } from './todoSlice';

const reactionsEmoji = {
    thumbsup: '👍',
    like: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionsButtons = ({ post }) => {
    const dispatch = useDispatch();


    const reactionButton = Object.entries(reactionsEmoji).map(([name, emoji]) => {
        return (
            <button key={name}
                type='button'
                className='reactionButton'
                onClick={() => dispatch(reactionsAdd(
                    {
                        postId: post.id,
                        reaction: name
                    }
                ))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButton}</div>
}

export default ReactionsButtons;