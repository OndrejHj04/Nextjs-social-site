"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/couter/couterSlice";
const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <div>Home</div>
      <p>{state}</p>
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>sub</button>
    </>
  );
};

export default Home;
