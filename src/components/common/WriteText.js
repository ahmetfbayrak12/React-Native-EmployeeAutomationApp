import React from 'react';
import { Text, View, TextInput } from 'react-native';

const WriteText = () => {
    return (
        <View style={styles.containerStyle}>
            <TextInput style={styles.inputStyle} placeholder={'type something...'} />
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        borderColor: '#ddd',
        height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 1,
    },
}

export default WriteText;
