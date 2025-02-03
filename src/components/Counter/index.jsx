import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAsync, incrementByAmount, decrementAsync } from '../../slices/counter/counterSlice';


export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState('');
    const incrementValue = Number(incrementAmount) || 0;

    const [asyncIncrementAmount, setAsyncIncrementAmount] = useState('');
    const incrementAsyncValue = Number(asyncIncrementAmount) || 0;

    const [asyncDecrementAmount, setAsyncDecrementAmount] = useState('');
    const decrementAsyncValue = Number(asyncDecrementAmount) || 0;

    

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
                <br />
                <input
                    type='number'
                    aria-label="Set increment Async amount"
                    value={asyncIncrementAmount}
                    onChange={(e) => setAsyncIncrementAmount(e.target.value)}
                />
                <button
                    aria-label='Async add amount'
                    onClick={() => dispatch(incrementAsync(incrementAsyncValue))}
                >
                    Асинхронно добавить число
                </button>
                <br />
                <input
                    type='number'
                    aria-label="Set decrement Async amount"
                    value={asyncDecrementAmount}
                    onChange={(e) => setAsyncDecrementAmount(e.target.value)}
                />
                <button
                    aria-label='Async decrease amount'
                    onClick={() => dispatch(decrementAsync(decrementAsyncValue))}
                >
                    Асинхронно убавить число
                </button>
            </div>
        </div>
    )
}