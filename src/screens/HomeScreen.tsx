import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button, ActivityIndicator, Dimensions } from 'react-native'
import { RootStackParamList } from '../navigation/Navigation';
import { useMovies } from '../hooks/useMovies';
import { Movie } from '../interfaces/MoviesInterface';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';



const windowWidth = Dimensions.get('window').width
const HomeScreen = () => {

    const { nowPlaying,popular,upcoming,topRated,loading } = useMovies()
    
    const { top } = useSafeAreaInsets()
    
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={80} />
            </View>

        )
    }

    return (
        <ScrollView>
        <View style={{ marginTop: top }}>
            {/* <Text>
              <MoviePoster movie={peliculasEnCine[0]}/>
          </Text> */}


            {/* carusel Principal */}
            <View style={{ height: 450, marginTop: 10 }}>
                <Carousel
                    data={nowPlaying}
                    renderItem={({ item }: any) => (
                        <MoviePoster movie={item} />
                    )}
                    sliderWidth={windowWidth}
                    itemWidth={250}
                    inactiveSlideOpacity={0.9}
                />
            </View>
            {/* peliculas populares */}
           
            <HorizontalSlider title="mejores votadas! tío" movie={topRated}/>
            <HorizontalSlider title=" Populares" movie={popular}/>
            <HorizontalSlider title=" viniendo chaval!" movie={upcoming}/>
         

        </View>
        </ScrollView>
    )
}

export default HomeScreen

