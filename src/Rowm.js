import React, { useEffect, useState } from 'react';
import axios from './axios';
import {base_url}  from './Requests';
import './Rowm.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    const [moviePreview, setMoviePreview] = useState({});
    const [trailerUrl, setTrailerUrl] = useState('');
    const [playerWidth, setPlayerWidth] = useState({
        height: '0',
        width: '0',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    });
    function truncate(string, n) {
        string = String(string) 
        return string?.length > n ? string.substr(0, n) + '' : string ;
    }
    useEffect(() => {
       
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 400) {
            setPlayerWidth(
                {
                    height: '195',
                    width: '320',
                    playerVars: {
                      // https://developers.google.com/youtube/player_parameters
                      autoplay: 1,
                    },
                }

            );
          } else {
            setPlayerWidth({
                height: '390',
                width: '640',
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                },
            });
          }
        }
    
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
    const handleClick = (movie) => {
        console.log(movie)
        
        if (movie) {
            setMoviePreview(movie)
        }
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(null, { tmdbId: movie.id })
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search).get('v')
                setTrailerUrl(urlParams)
            })
            .catch((error) => console.log(error))
        }
    }
    return (
    <div className='row'  >
        <h2>{title}</h2>
        <div className='row__posters' >  
            {movies.map((movie) => (
                <div className='row__manos' key={movie.id} onClick={() => handleClick(movie)}
                >
                        <div className="hidden-paragraph">
                            <div className='hidden-items'>
                                <h3> {movie.title || movie.name || movie.original_name}</h3>
                                <button className="hidden-button">PLAY</button>
                            </div>
                            {movie.overview}
                        </div>
                    <img 
                        className={`row__poster row__posterLarge`}
                        src={`${base_url}${true ? movie.poster_path : movie.backdrop_path }`} 
                        alt={movie.title} 
                    />
                    <div className='row__media-title'>
                        {movie.title || movie.name || movie.original_name}
                    </div>
                        {movie.first_air_date && <div className='row__release-date'>({truncate(movie.first_air_date, 4)})</div> } 
                        {movie.release_date && <div className='row__release-date'>({ truncate(movie.release_date, 4)})</div> } 
                </div>
            ))}
        </div>
        {   trailerUrl && 
            <div  className='row__movie'>
                <div className='row__movie-overlay' onClick={() => handleClick(moviePreview)}> </div>
                <div className='row__movie-close' onClick={() => handleClick(moviePreview)}> {trailerUrl && 'X'}</div>
                <YouTube className='row__movie-iframe' videoId={trailerUrl} opts={playerWidth} />
                <div className='row__movie-overview'> {moviePreview.overview} </div>
            </div>
        }
    </div>
  );
}
export default Row;