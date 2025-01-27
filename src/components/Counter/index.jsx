import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../../slices/counter/counterSlice';


export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(2)
    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <div>
                <button
                    aria-label='Increment value'
                    onClick={() => dispatch(increment())}
                >
                    Добавить 1
                </button>
                <span>{count}</span>
                <button
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}
                >
                    Отнять 1
                </button>
                <br />
                <br />
                <input 
                    type='number'
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                 />
                <button
                    aria-label='increment By Amount'
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Добавить число
                </button>
            </div>
        </div>
    )
}