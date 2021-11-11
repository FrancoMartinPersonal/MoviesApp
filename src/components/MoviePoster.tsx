import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/MoviesInterface'
import { RootStackParamList } from '../navigation/Navigation';


interface Props {
    movie:Movie;
    height?:number;
    width?:number;
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'DetailScreen' >
;
const MoviePoster = ({movie,height=400,width=250}:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
   
    const navigation = useNavigation<homeScreenProp>()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
             activeOpacity={0.8}
             style={{
             width,
            height,
            marginHorizontal:10,
            paddingBottom:10,
            
            }}>
                <View style={styles.imageContainer}>

            <Image source={{uri}} style={styles.image}></Image>
                </View>
            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    imageContainer:{
        flex:1,
    
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.91,
shadowRadius: 3.11,

elevation: 10,
        borderRadius:20,
    },
    
 image:{
   flex:1,
   borderRadius:20
   
}})
export default MoviePoster
