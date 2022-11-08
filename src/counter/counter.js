// import { useSelector } from "react-redux"
import { decrement, increment, incrementAmount, reset } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Input from "../Input";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const [amount, setAmount] = useState("");

  const addValue = Number(amount) ? parseInt(amount) : 0;

  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(increment());
  };

  const minusCount = () => {
    dispatch(decrement());
  };

  const addAmountToCount = (e) => {
    dispatch(incrementAmount(addValue));
  };

  const onReset = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <div className="h-screen flex flex-row items-center justify-center">
      <div className="flex flex-col items-center w-1/4 h-1/2 p-0 justify-between">
        <h1 className="text-6xl text-red-500 font-bold">{count}</h1>
        <div className="mt-5 flex w-4/5 justify-between">
          <button className="w-36 text-5xl bg-blue-500" onClick={minusCount}>
            -
          </button>
          <button className="bg-blue-500 w-36 text-5xl" onClick={addCount}>
            +
          </button>
        </div>
        <Input
          type="number"
          value={amount}
          className="border text-3xl text-center h-20 mt-5 mb-5"
          placeholder="Enter Number to Add"
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="flex justify-between w-3/4">
          <button
            className="bg-blue-500 w-70 p-5 mr-5 text-xl"
            onClick={addAmountToCount}
            name="count"
          >
            Add Count
          </button>
          <button className="bg-blue-500 w-40 ml-5 text-xl" onClick={onReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
