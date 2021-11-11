import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/MoviesInterface'
import { RootStackParamList } from '../navigation/Navigation'
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails'
import Icon from 'react-native-vector-icons/Ionicons'


interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> { }

const screenHeight = Dimensions.get('screen').height

const DetailScreen = ({ route,navigation }: Props) => {
    const movie = route?.params
    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
    const { isLoading, cast, movieFull } = useMovieDetails(movie?.id)
    console.log(isLoading)
    return (
        <ScrollView>

            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.backBotton}
                onPress={()=>navigation.goBack()}>
                    <Icon
                        color='white'
                        name='arrow-back-outline'
                        size={40}
                    />
                </TouchableOpacity>
                <View style={styles.imageBorder}>

                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />

                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie?.original_title}</Text>
                <Text style={styles.title}>{movie?.title}</Text>
            </View>
            <View style={styles.marginContainer}>

                {isLoading ? <ActivityIndicator size={40} color="grey" /> :
                    <MovieDetails movieFull={movieFull!} cast={cast} />}
                {/* botón para cerrar*/}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.70,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.91,
        shadowRadius: 3.11,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        elevation: 10,

    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    subTitle: {
        fontSize: 18
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backBotton: {
        marginVertical: 10,
        marginHorizontal:10,
        backgroundColor: '#aaa8',
        width: 40,
        borderRadius: 50,
        position: 'absolute',
        zIndex:1000
    }
})


export default DetailScreen
