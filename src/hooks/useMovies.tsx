
import React, { useEffect } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBMoviesResponse } from '../interfaces/MoviesInterface'


interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {


    const [loading, setLoading] = React.useState(true)
    const [moviesState, setMoviesState] = React.useState<MoviesState>({
        nowPlaying:[],
        popular:[],
        topRated:[],
        upcoming:[],
    }) //no entiendo porqué se arregla el error pasandolé por parametro aun array vacío


    useEffect(() => {

        getMovies()
    }, [])

    const getMovies = async () => {

        const resNowPlaying = movieDB.get<MovieDBMoviesResponse>('/now_playing')
        const resPopular = movieDB.get<MovieDBMoviesResponse>('/popular')
        const resTopRated = movieDB.get<MovieDBMoviesResponse>('/top_rated')
        const resUpcoming = movieDB.get<MovieDBMoviesResponse>('/upcoming')

        const resAll = await Promise.all([
            resNowPlaying,
            resPopular,
            resTopRated,
            resUpcoming
        ])
        setMoviesState({
            nowPlaying: resAll[0].data.results,
            popular: resAll[1].data.results,
            topRated: resAll[2].data.results,
            upcoming: resAll[3].data.results,
        })

        setLoading(false)
    }


    return {
        ...moviesState,
        setLoading,
        loading
    }


}

