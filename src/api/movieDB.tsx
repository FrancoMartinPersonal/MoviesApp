import axios from "axios";

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'285573a51179e3506150865304c4dcf9',
        language:'es-ES'
    }
})

export default movieDB