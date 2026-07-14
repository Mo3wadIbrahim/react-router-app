import { createSlice } from "@reduxjs/toolkit";

const couterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, changed: false },
  reducers: {
    replaceCounter(state, action) {
      state.counter = action.payload.counter;
      state.changed = false;
    },
    increase(state) {
      state.counter++;
      state.changed = true;
    },
    decrease(state) {
      state.counter--;
      state.changed = true;
    },
  },
});

function syncCounterData(url, counter, actionType) {
  if (actionType === "send") {
    return async () => {
      const sendData = async () => {
        const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify({
            counter: counter.counter,
          }),
        });
        if (!response.ok) {
          alert("Error");
        }
      };
      await sendData();
    };
  }
  if (actionType === "fetch") {
    return async (dispatch) => {
      const fetchData = async () => {
        const response = await fetch(url);
        if (!response.ok) {
          alert("Error");
        }
        const resData = await response.json();
        dispatch(
          couterSlice.actions.replaceCounter({
            counter: resData.counter || 0,
          }),
        );
      };
      await fetchData();
    };
  }
}

export const counterActions = { ...couterSlice.actions, syncCounterData };
export default couterSlice.reducer;
