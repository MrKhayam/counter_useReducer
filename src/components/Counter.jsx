import React, { useReducer } from 'react'
import { reducer } from '../reducer/reducer';
import toast from 'react-hot-toast';

const initialState = {
    count : 0
}
const Counter = () => {
    const[state,depatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="w-[400px] flex flex-col items-center p-5 h-auto bg-white rounded-lg">
        <h1 className="text-4xl text-black">{state.count}</h1>
        <div className="flex w-full items-center gap-3 justify-center">
          <button
            onClick={() => depatch({ type: "increase" })}
            className="text-white rounded-md px-3 py-2 bg-black "
          >
            Increase
          </button>
          <button
            onClick={() => {
                if(state.count > 0) {
                    depatch({type : 'decrease'})
                }else {
                    depatch({type : 'tost'})
                    toast.error('Cannot be less than Zero. . .')
                }
            }}
            className="text-white rounded-md px-3 py-2 bg-black "
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter
