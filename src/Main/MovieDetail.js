import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const Detail = (props) => {

    console.log('description: ' + props.movie.description);
    return(
        <Card>
            <CardSection>
                <View style={styles.cardStyle}>
                    <Image style={{width:100,height:50}} source={{uri:'https://dw9to29mmj727.cloudfront.net/products/1421597063.jpg'}}>
                    </Image> 
                    <View>
                        <Text>{props.movie.description}</Text> 
                        <Text>{props.movie.date}</Text> 
                        <Text>{props.movie.country}</Text> 
                    </View>
                </View>
            </CardSection>   
        </Card>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth:1,
        borderRadius: 3,
        borderColor: 'black',
        padding: 5,
        flexDirection: 'row'
    }
});

export default Detail;