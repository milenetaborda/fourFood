export interface SendUserAction {
  type: string;
  id: string;
}

export interface deleteMessageAction {
  type: string;
  id: string;
}

export type ChatActionTypes = SendUserAction | deleteMessageAction;
