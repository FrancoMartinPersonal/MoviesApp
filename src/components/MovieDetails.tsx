import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/MoviesInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import CastItem from './CastItem';



interface Props {
    movieFull: MovieFull;
    cast: Cast[];

}


const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* detalles */}
            <View style={styles.viewDetails}>
                <View style={styles.viewDetailsVote}>
                    <Text style={{ marginHorizontal: 10, marginTop: 3 }}>
                        <Icon
                            name='star-outline'
                            color='gold'
                            size={30}
                        />
                    </Text>
                    <Text style={{
                        ...styles.textStar,

                        color: movieFull.vote_average > 8.2 ? '#828' :
                            movieFull.vote_average > 6.0 ? 'green' :
                                movieFull.vote_average >= 4.0 ? 'orange' :
                                    movieFull.vote_average > 1.0 ? 'red' :
                                        'black'
                    }}>{movieFull.vote_average}</Text>
                    <Text style={styles.textGenres}>
                        - {movieFull.genres.map(g => {
                            return (g.name)
                        }).join(', ')}
                    </Text>
                </View>
                {/* historia */}
                <View style={styles.viewHistory}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                        Historia
                    </Text>
                    <Text style={styles.textOverview}>
                        {movieFull.overview}
                    </Text>
                </View>
                <View style={{
                    ...styles.viewHistory,
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>
                        Presupuesto
                    </Text>
                    <Text style={{
                        ...styles.textOverview,
                        alignSelf: 'center'
                    }}>
                        {currencyFormatter.format(movieFull.budget, { locale: 'en-US' })}
                    </Text>
                </View>

            </View>
            {/* Casting */}
            <View style={{
                ...styles.viewHistory,
                justifyContent: 'center',
            
            }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>
                    Actores</Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item}/>}
                    horizontal={true} showsHorizontalScrollIndicator={false}>

                </FlatList>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    viewDetails: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal:10,
    },
    viewDetailsVote: {
        flexDirection: 'row',
        backgroundColor: '#eee5',
        borderRadius: 4
    },
    textStar: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    textGenres: {
        alignSelf: 'center',
        paddingHorizontal: 20,

        fontSize: 10,
        fontWeight: 'bold'
    },
    viewHistory: {
        marginTop: 10,
        backgroundColor: '#eee5',
        padding: 10,
        borderRadius: 4
    },
    textOverview: {

    }
})

export default MovieDetails
