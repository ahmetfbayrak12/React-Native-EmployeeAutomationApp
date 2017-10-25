import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Input from './common/Input';
import { messageChanged, messageSend } from '../actions';
import { connect } from 'react-redux'
import Card from './common/Card';
import CardSection from './common/CardSection';


class chatScreen extends Component {

    onButtonPress() {
    const { message } = this.props;


    this.props.messageSend( message );
    }

    onMessageChange(text) {
        this.props.messageChanged(text);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{flex: 1}}>
                    <Text style={{ alignSelf: 'center', fontSize: 18 }}>
                        Welcome to chat room!
                    </Text>
                </View>

                <View style={{flex: 6}}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>
                         Messages will come here. 
                    </Text>
                </View>
                
                <Card>
                <CardSection >
                    <TextInput
                        placeholder='Write something..'
                        autoCorrect={false}
                        onChangeText={this.onMessageChange.bind(this)}
                        value= {this.props.message}
                        style={styles.inputStyle}
                    />
                    <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
                        <Text style={styles.textStyle}>
                            Send!
                        </Text>
                    </TouchableOpacity>

                </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 16,
        lineHeight: 23,
        flex: 4,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1

    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

        textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },

    buttonStyle: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

const mapStateToProps = state => {
    return {
        message: state.chat.message,
        nickname: state.chat.nickname,
        chatScreen: state.chat.chatScreen,
    };
}

export default connect(mapStateToProps, { messageChanged, messageSend })(chatScreen);