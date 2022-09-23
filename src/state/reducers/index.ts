import { combineReducers } from "redux";
import firstReducer from "./firstReducer";

const reducers = combineReducers({
  firstReducuer: firstReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
