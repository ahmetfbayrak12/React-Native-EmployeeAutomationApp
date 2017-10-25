import firebase from 'firebase';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE, 
    EMPLOYEES_FETCH_SUCCESS, 
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE_SUCCESS,
    EMPLOYEE_CANCEL_UPDATE
 } from './types';

export const employeeUpdate = ({ prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList({ type: 'reset'});
        });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => Actions.employeeList({ type: 'reset' }))
            .then(() => Alert.alert('You just updated!'))
            .then(() => dispatch({ type: EMPLOYEE_SAVE_SUCCESS }))
    }
}


export const employeeDelete= ({ uid }) => {
    console.log('yoksa sen misin');
    console.log(uid);
    const { currentUser } = firebase.auth();

    return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => Actions.employeeList({ type: 'reset' }))
        .then(() => dispatch({ type: EMPLOYEE_DELETE_SUCCESS }))
    };
};

export const employeeCancelUpdate = () => {
    return (dispatch) => {
        dispatch({ type: EMPLOYEE_CANCEL_UPDATE })
    };
}