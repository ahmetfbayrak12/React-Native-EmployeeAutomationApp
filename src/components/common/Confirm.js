import React from 'react';
import { Text, View, Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    return (
        <Modal
        animationType='slide'
        transparent
        onRequestClose={() => {}}
        visible={visible}
        >
            <View style={styles.containerStyle}>
                <CardSection style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },

    textStyle: {
        fontSize: 18,
        lineHeight: 40,
        flex: 1,
        textAlign: 'center'
    },

    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        justifyContent: 'center',
        position: 'relative',
        flex: 1
    }
}

export default Confirm;