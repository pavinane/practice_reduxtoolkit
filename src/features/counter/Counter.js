import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './counterSlice';

function Counter() {

    const [incrementAmount, setIncrementAmount] = useState(0);

    const dispatch = useDispatch();

    const count = useSelector((state) => state.counterData.counter);


    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    const addValue = Number(incrementAmount) || 0 ;
    

    return (
        <div>

            <div className='counter_block'>
                <button onClick={handleIncrement}>Increment</button>
                {count}
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={resetAll}>Reset</button>

                <div>
                    <input type="text"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={() => dispatch(incrementByAmount(addValue))}>IncrementAmount</button>
                </div>
            </div>
        </div>
    )
}

export default Counter


