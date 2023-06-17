import React, {useEffect, useState} from 'react';
import './Banner.css';
import axios from './axios';
import  requests,{base_url} from './Requests';

// import backdropImage from './assets/backdropImage.jpg';


function Banner() {
    // let bannerDescription = 'This is a test description This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description'
    const [movie, setMovie] = useState([]);
    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchMoviesZonePicks);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    // console.log(movie);
    let backdropImage = `${base_url}${movie?.backdrop_path }` 


    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + ' ...' : string ;
    }
  return (
    
    <header 
        className='banner'
        style={{
            backgroundImage : `url(${backdropImage})`,
            backgroundSize : 'cover',
            backgroundPosition: 'center'
        }}
    >
        <div className='banner__contents'>
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>List</button>

            </div>
            <h1 className='banner__description'>{truncate(`${movie.overview}`, 250 )}</h1>
        </div>
        <div className='banner--fadeBottom'> </div>
     </header>
  )
}

export default Banner