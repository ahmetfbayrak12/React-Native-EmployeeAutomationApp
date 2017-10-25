import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Text, View, Picker } from 'react-native'; 
import CardSection from './common/CardSection';
import Input from './common/Input';

class EmployeeForm extends Component {
    render () {
        return (
            <View>
                <CardSection>
                        <Input
                            label='Name'
                            placeholder='name'
                            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                            value= {this.props.name}                    
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label='Phone'
                            placeholder='+90 111 111 11 11'
                            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                            value= {this.props.phone}
                        />
                    </CardSection>

                    <CardSection style={{flexDirection: 'column'}}>
                        <Text style={styles.pickerStyle}> Shift </Text>
                        <Picker 
                            selectedValue={this.props.shift} 
                            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}                        
                        >
                            <Picker.Item label="Monday" value ="Monday" />
                            <Picker.Item label="Tuesday" value ="Tuesday" />
                            <Picker.Item label="Wednesday" value ="Wednesday" />
                            <Picker.Item label="Thursday" value ="Thursday" />
                            <Picker.Item label="Friday" value ="Friday" />
                            <Picker.Item label="Saturday" value ="Saturday" />
                            <Picker.Item label="Sunday" value ="Sunday" />
                        </Picker>
                    </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingBottom: 20,
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);