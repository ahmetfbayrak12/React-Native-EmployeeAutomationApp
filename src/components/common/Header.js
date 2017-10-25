import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {

 //   const { textStyle, viewStyle } = styles;
    return (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> { props.headerText }</Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
        backgroundColor: '#F8F8F8',
/*        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
*/
        elevation: 5
    },

    textStyle: {
        fontSize: 25,
        color: 'black'
    }
};

export default Header;
