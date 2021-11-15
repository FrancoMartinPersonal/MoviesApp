import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, Dimensions } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {  ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import { getImageColors } from '../helpers/GetColores';
import { GradientContext } from '../api/context/GradientContent';



const windowWidth = Dimensions.get('window').width
const HomeScreen = () => {

    const { nowPlaying, popular, upcoming, topRated, loading } = useMovies()
    const { top } = useSafeAreaInsets()
    const {setMainColors} = useContext(GradientContext)
    const getPosterColors = async (index:number ) => {
        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
    let [primary='green',secondary='orange'] = await getImageColors(uri)
        setMainColors({primary,secondary})
        
    }
    useEffect(() => {
        if(nowPlaying.length > 0){
            getPosterColors(0)
        }
    },[nowPlaying])

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={80} />
            </View>

        )
    }

    return (
        <GradientBackground>
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
                            onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>
                    {/* peliculas populares */}

                    <HorizontalSlider title="mejores votadas! tío" movie={topRated} />
                    <HorizontalSlider title=" Populares" movie={popular} />
                    <HorizontalSlider title=" viniendo chaval!" movie={upcoming} />


                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen

