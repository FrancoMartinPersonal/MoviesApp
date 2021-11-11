import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useMovies } from '../hooks/useMovies'
import { Movie } from '../interfaces/MoviesInterface'
import MoviePoster from './MoviePoster'

interface Props {
    title?:string;
    movie:Movie[];
}

const HorizontalSlider = ({title,movie}:Props) => {
    let titleHeight = 290
    return (
        <View style={{  height: title?titleHeight:titleHeight-20}}>
        {title&&<Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>}
        <FlatList
            data={movie}
            renderItem={({ item }: any) => <MoviePoster movie={item} height={250} width={170}/>}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

        />
    </View>
    )
}

export default HorizontalSlider
