import React from 'react';
import './HomeScreen.css';
import Row from '../Rowm';
import requests from '../Requests';
import Banner from '../Banner';
import Nav from '../Nav';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner/>

        {/* <Row 
          title='Movies Zone Picks'
          fetchUrl={requests.fetchMoviesZonePicks}
          isLargeRow
        /> */}
         <Row title='TRENDING' fetchUrl={requests.fetchTrending}/>
         <Row title='TOP RATED' fetchUrl={requests.fetchTopRated}/>
         <Row title='ACTION' fetchUrl={requests.fetchActionMovies} />
         <Row title='COMEDY' fetchUrl={requests.fetchComedyMovies} />
         <Row title='HORROR' fetchUrl={requests.fetchHorrorMovies} />
         <Row title='DOCUMENTARY' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen