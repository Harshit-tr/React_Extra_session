import { useReducer, useEffect } from "react";
const initialState = {
  options: [
    { id: 1, name: "car", value: 20 },
    { id: 2, name: "bike", value: 15 },
    { id: 3, name: "truck", value: 30 },
    { id: 4, name: "bus", value: 40 },
  ],
  quantity: 1,
  selected: 1,
};
function reduceButtonState(state) {
  return {
    ...state,
    decrementDisabled: state.quantity === 0,
    incrementDisabled: state.quantity === 10,
  };
}
function reduceTotal(state) {
  const x1 = state.options.find((i) => i.id === state.selected);
  return {
    ...state,
    total: x1.value * state.quantity,
  };
}

function Function2(state, action) {
  let newstate;
  switch (action.type) {
    case "init":
      newstate = reduceTotal(state);
      return reduceButtonState(newstate);
    case "incrementquantity":
      newstate = { ...state, quantity: state.quantity + 1 };
      newstate = reduceTotal(newstate);
      return reduceButtonState(newstate);
    case "decrementquantity":
      newstate = { ...state, quantity: state.quantity - 1 };
      newstate = reduceTotal(newstate);
      return reduceButtonState(newstate);
    case "selectitem":
      newstate = { ...state, selected: Number(action.id) };
      return reduceTotal(newstate);
    default:
      throw new Error("Unknown action type " + action.type);
  }
}

export default function ReducerDependency() {
  const [
    {
      options,
      quantity,
      selected,
      decrementDisabled,
      incrementDisabled,
      total,
    },
    dispatch,
  ] = useReducer(Function2, initialState);
  useEffect(() => {
    dispatch({ type: "init" });
  }, []);
  return (
    <>
      <section>
        <button
          disabled={decrementDisabled}
          onClick={() => dispatch({ type: "decrementquantity" })}
        >
          -
        </button>
        <input readOnly value={quantity} />
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: "incrementquantity" })}
        >
          +
        </button>
      </section>
      <section>
        <select
          value={selected}
          onChange={(e) => dispatch({ type: "selectitem", id: e.target.value })}
        >
          {options.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name} - ${i.value}
            </option>
          ))}
        </select>
      </section>
      <section>{total}</section>
    </>
  );
}
