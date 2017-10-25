import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { MESSAGE_CHANGED, MESSAGE_SEND } from './types';

export const messageChanged = (text) => {
    return {
        type: MESSAGE_CHANGED,
        payload: text,
    };
};

export const messageSend = ( message ) => {
    return (dispatch) => {
        dispatch({ type: MESSAGE_SEND });
    };
};
