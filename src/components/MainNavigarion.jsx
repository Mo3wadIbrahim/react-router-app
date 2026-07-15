import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../redux-store/counterSlice";
import { useEffect } from "react";
export default function MainNavigation() {
  const counter = useSelector((state) => state.counter);
  const changed = useSelector((state) => state.counter.changed);
  const dispatch = useDispatch();
  useEffect(() => {
    if (changed) {
      dispatch(
        counterActions.syncCounterData(
          "https://react-app-edbe6-default-rtdb.firebaseio.com/counter.json",
          counter,
          "send",
        ),
      );
    }
  }, [counter, dispatch, changed]);
  useEffect(() => {
    dispatch(
      counterActions.syncCounterData(
        "https://react-app-edbe6-default-rtdb.firebaseio.com/counter.json",
        null,
        "fetch",
      ),
    );
  }, [dispatch]);
  const handleIncrease = () => {
    dispatch(counterActions.increase());
  };
  const handleDecrease = () => {
    dispatch(counterActions.decrease());
  };
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <button onClick={handleDecrease}>-</button>
          </li>
          <li>
            <span>{counter.counter}</span>
          </li>
          <li>
            <button onClick={handleIncrease}>+</button>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
