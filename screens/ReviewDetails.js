import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import Card from '../shared/card';
import {globalStyles,images} from '../styles/global';

export default function ReviewDetails({route,navigation}) {
    const {title,rating,body} = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <View style={styles.rating} >
            <Text>Game Rating:</Text>
            <Image source={images.ratings[rating]} />
            </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop:16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});

