import React , {useEffect, useState} from 'react';
import './Row.css';
import axios from './axios';
import {base_url} from './Requests'


function Row({title, fetchUrl, isLargeRow=false}) {
    const [movies, setMovies] = useState([]);
    useEffect (( ) => {
       async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
       } 
       fetchData();
    }, [fetchUrl]); 
    console.log(movies);
    
    return (
            <div className='row'>
                <h2>{title}</h2>


                <div className='row__posters'>
                    {   
                        movies.map(movie => (
                            <img 
                                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                alt={movie.name} 
                            />
                        ))
                    }
                </div>
                
            </div>
    )
}

export default Row