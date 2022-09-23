import { configureStore } from "@reduxjs/toolkit";
import { ActionType } from "./action-types";
import reducers from "./reducers";

export const store = configureStore({
  reducer: reducers,
});

store.dispatch({
  type: ActionType.FIRST_ACTION,
  payload: { id: "test1", content: "test" },
});

//redux toolkit automatically includes thunk middleware
