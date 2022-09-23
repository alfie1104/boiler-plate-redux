import { FirstAction, SecondAction } from "../actions";
import { ActionType } from "../action-types";

export const firstActionName = (id: string, content: string): FirstAction => {
  return {
    type: ActionType.FIRST_ACTION,
    payload: {
      id,
      content,
    },
  };
};

export const secondActionName = (id: string): SecondAction => {
  return {
    type: ActionType.SECOND_ACTION,
    payload: id,
  };
};
