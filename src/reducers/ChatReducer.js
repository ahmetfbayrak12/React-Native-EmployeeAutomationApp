import { MESSAGE_CHANGED, MESSAGE_SEND } from '../actions/types';

const INITIAL_STATE = { message: '', nickname: '', chatScreen: '' };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MESSAGE_CHANGED:
            return { ...state, message: action.payload };
        case MESSAGE_SEND:
            return INITIAL_STATE;
        default:
            return state;
    }
}