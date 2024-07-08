import { useCounterStore } from "../../store/counter-store";
// const logCount = () => {
//   const count = useCounterStore.getState().count;
//   console.log(count);
// };
//
// const setCount = () => {
//   useCounterStore.setState({ count: 6 });
// };

export const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};
