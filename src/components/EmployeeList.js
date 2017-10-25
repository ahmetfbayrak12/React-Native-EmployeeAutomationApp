import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import { Text, View, ListView } from 'react-native';
import ListItem from './ListItem';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => { //object to array
  debugger;
    const employees = _.map(state.employees, (val, uid) => {    // state.employees is an object, it has so many pair key and value. for each key value pair (map) val = each value ( name, phone or shift), uid = each key. 
        return { ...val, uid };     // create new object and push in the all values in the user model(name, phone or shift). { shift: 'Monday',  name: 'S', id: '1231'}
    });
    debugger;
    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);