import React from 'react';
import NavBar from '../layout/NavBar';
import '../../styles/components/home.css';
import backgroundHome from '../../images/Captura de pantalla (306).png';
import backgroundHomeMars from '../../images/fortnite-outfit-marshmello.jpg';
import Tienda from './Tienda';

export default function Home() {



  return (
    <>
      <NavBar/>
      <div className='container-home'>
        <div className='cards-home-container'>
          {/* <div className='tittle-card-home'> <a href='#pavos'>comprar</a> </div> */}
          <div className='card-up-home'>
            <div className='card-home'>
              <img alt='fortnite' src={backgroundHomeMars}></img>
            </div>
          </div>
          <div className='card-up-home center-card'>
            <div className='card-home'>
              <img alt='fortnite' src={backgroundHome}></img>
              <div className='tittle-card-home'> <a href='#pavos'>comprar</a> </div>
            </div>
          </div>
          <div className='card-up-home'>
            <div className='card-home'>
              <img alt='fortnite' src={backgroundHomeMars}></img>
            </div>
          </div>
        </div>
      </div>
      <Tienda/>
    </>
  )
}