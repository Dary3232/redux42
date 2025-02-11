import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAsync, incrementByAmount } from '../../slices/counter/counterSlice';


export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [asyncIncrementAmount, setAsyncIncrementAmount] = useState('');
    const incrementAsyncValue = Number(asyncIncrementAmount) || 0;



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
                <button
                    aria-label='Increment by Amount'
                    onClick={() => dispatch(incrementByAmount(2))}
                >
                    Добавить 2 (и +3 через middleware)
                </button>
                <br />
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
            </div>
        </div>
    )
}