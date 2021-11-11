import {useEffect, useState} from 'react'
import movieDB from '../api/movieDB';
import { Cast, MovieCredits } from '../interfaces/creditsInterface';
import { MovieFull, Movie } from '../interfaces/MoviesInterface';
interface MovieDetails {
    isLoading: boolean;
    movieFull?:MovieFull;
    cast:Cast[];
}
const useMovieDetails = (movieId:number|undefined) => {
    const [state,setState] = useState<MovieDetails>({
        isLoading:true,
        movieFull:undefined,
        cast:[]
    })


    const getMovieDetails =async () => {
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = await movieDB.get<MovieCredits>(`/${movieId}/credits`)
        
        console.log(movieDetailsPromise.data.overview)
        const [movieDetailsResp,castPromiseResp] = await Promise.all([
            movieDetailsPromise,
            castPromise
        ])

        setState({
            isLoading:false,
            movieFull:movieDetailsResp.data,
            cast:castPromiseResp.data.cast,
        })
       
    }
    useEffect(()=> {
        getMovieDetails()
    },[])
    return {
        ...state,
    }
}

export default useMovieDetails

