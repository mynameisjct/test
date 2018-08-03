import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Card = (props) => {

    return(
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth:0,
        shadowColor: '#000',
        shadowOffset: { width:0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 1,
    }
});

export default Card;