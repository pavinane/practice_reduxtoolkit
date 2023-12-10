import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { oneBtn, threeBtn, twoBtn } from './toggleSlice';


export default function ToggleBlock () {
    const dispatch = useDispatch();
    const handleOne = () => {
        dispatch(oneBtn())
    }
    const handleTwo = () => {
        dispatch(twoBtn())
    }
    const handleThree = () => {
        dispatch(threeBtn())
    }
    return(
        <div>
            <div>
                <button onClick={handleOne}>One</button>
                <button onClick={handleTwo}>Two</button>
                <button onClick={handleThree}>three</button>
            </div>
            <h1>{useSelector((state) => state.toggleData.toggler)}</h1>
        </div>
    )
}
