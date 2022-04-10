import { useDispatch, useSelector } from "react-redux";
import Example from "./Example";
import { increment } from "./redux/counterSlice";

function App() {
  const { counterReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = (val) => {
    dispatch(increment(val));
  };

  return (
    <>
      value : {counterReducer.value}
      <button onClick={() => handleIncrement(5)}>increment</button>
      <div>
        <Example />
      </div>
    </>
  );
}

export default App;
