import { ChatActionTypes } from '../../../models/reducer';

export default function user(state: any[] = [], action: any): any {
  switch (action.type) {
    case 'USER_INFO': {
      return { ...state, updateProfile: [action.info] };
    }
    default:
      return state;
  }
}
