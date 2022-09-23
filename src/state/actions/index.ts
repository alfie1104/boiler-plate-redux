import { ActionType } from "../action-types";

export interface FirstAction {
  type: ActionType.FIRST_ACTION;
  payload: {
    id: string;
    content: string;
  };
}

export interface SecondAction {
  type: ActionType.SECOND_ACTION;
  payload: string;
}

export type Action = FirstAction | SecondAction;
