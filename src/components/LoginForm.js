import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Header from './common/Header';
import { connect } from 'react-redux'
import * as actions from '../actions';
import Spinner from './common/Spinner';



class LoginForm extends Component {
    

    onButtonPress() {
    const { email, password, loading } = this.props;


    this.props.loginUser({ email, password });
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner />;
        }

        return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button> 
        );
    }

    render () {
        return (
            <Card>
                {/*<Header headerText='Authentication' />*/}
                <CardSection>
                    <Input
                    label='Email'
                    placeholder='email@gmail.com'
                    onChangeText={this.onEmailChange.bind(this)}
                    value= {this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label='Password'
                    placeholder='password'
                    secureTextEntry
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    />
                </CardSection>  

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps, actions)(LoginForm);