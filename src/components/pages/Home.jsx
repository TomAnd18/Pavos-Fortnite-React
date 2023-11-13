import React from 'react';
import '../../styles/pages/home.css';
import fortniteLogo from '../../images/fortnite-logo.png';
import Tienda from './Tienda';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Home() {



  return (
    <>
      <div className='container-home'>
        <div className='cards-home-container'>
          <div className='info-page-home'>
            <p>
              comprá pavos, skin, gestos, packs...
            </p>
            <p>
              y mas de la tienda de 
            </p>
            <div className='container-logo-home'>
              <img className='logo-home' alt='logo' src={fortniteLogo}></img>
            </div>
          </div>
          <div className='tittle-card-home'> 
            <a href='#pavos' id='movable-button'>
              <KeyboardDoubleArrowRightIcon id='ico-right'/>
              comprar
              <KeyboardDoubleArrowLeftIcon id='ico-left'/>
            </a> 
          </div>
        </div>
      </div>
      <Tienda/>
    </>
  )
}