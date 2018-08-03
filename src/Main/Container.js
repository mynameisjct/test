import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';
import MovieList from './Movielist';

const Container = () => {

    // assigning props 'headerText' a value
     return(
        <View>
            <View style = {styles.header_}>
                <Header headerText={'Random Lists'}/> 
            </View>
            <View>
                <MovieList style={styles.data}/>
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            borderWidth: 1,
        },
        header_: {
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 0,
            borderColor:'red',
            height: 50,
            backgroundColor: '#F5FCFF',
        },
        wrapper_: {
            backgroundColor: 'blue',
            opacity: 0.5
        },
        data: {
            color: 'red'
        }
    }
);

export default Container;