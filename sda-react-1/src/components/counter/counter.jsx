import { useState } from "react";
import { TEXTS } from "../../translations";
import Button from "../button/Button";
import styles from "./counter.module.css";

const INITIAL_COUNTER_VALUE = 0;
const Counter = () => {
  const [counter, setCounter] = useState(INITIAL_COUNTER_VALUE);

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };
  const handleDecrementCounter = () => {
    setCounter(counter - 1);
  };
  const resetResetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <div>{counter}</div>

      <Button
        content={TEXTS.counter.button.incrementText}
        onClick={handleIncrementCounter}
        className={styles.increment}
      />
      <Button
        content={TEXTS.counter.button.decrementText}
        onClick={handleDecrementCounter}
        className={styles.decrement}
      />
      <Button
        content={TEXTS.counter.button.resetText}
        onClick={resetResetCounter}
        className={styles.reset}
      />

      {/* <button onClick={handleIncrementCounter}>
        {TEXTS.counter.button.incrementText}
      </button>
      <button onClick={handleDecrementCounter}>
        {TEXTS.counter.button.decrementText}
      </button>
      <button onClick={resetResetCounter}>
        {TEXTS.counter.button.resetText}
      </button> */}
    </>
  );
};

export default Counter;
