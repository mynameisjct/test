import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const CardSection = (props) => {

    return(
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth:0,
        padding:10,
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        position:'relative'
    }
});

export default CardSection;