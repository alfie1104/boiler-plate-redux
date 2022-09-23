import { ActionType } from "../action-types";
import { Action } from "../actions";

interface FirstReducersState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: string;
  };
}
const initialState: FirstReducersState = {
  data: {},
  loading: false,
  error: null,
  order: [],
};

const reducer = (state: FirstReducersState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FIRST_ACTION:
      const { id, content } = action.payload;
      const newState = {
        ...state,
        data: {
          ...state.data,
          [id]: content,
        },
      };

      return newState;
    case ActionType.SECOND_ACTION:
      return state;
    default:
      return state;
  }
};

export default reducer;
