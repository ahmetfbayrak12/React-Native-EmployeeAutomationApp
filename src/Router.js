import React from 'react';
import { Alert } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import chatScreen from './components/chatScreen';



const RouterComponent = () => {
        return (
            <Router sceneStyle={{paddingTop: 65}}>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='Login' initial />
                </Scene>
                
                <Scene key='main'>
                    <Scene key='employeeList' 
                        component={EmployeeList} 
                        title='Employee List' 
                        rightTitle='Add' 
                        onRight={() => Actions.employeeCreate()}
                        initial
                    />
                    <Scene key='employeeCreate' component={EmployeeCreate} title='New Employee'/>
                    <Scene key='employeeEdit' component={EmployeeEdit} title='Edit Employee' />
                </Scene>
            </Router>
        );
}

export default RouterComponent;