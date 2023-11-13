import React from 'react';
import '../../styles/layout/footer.css';
// import whatsApp  from '../../images/whatsapp.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='seccion-up-footer'>
              <div className='seccion-op'>
                <Link to={'/'}> Inicio </Link>
                <Link to={'/ayuda'}> Ayuda </Link>
              </div>
              <div className='seccion-img'>
                <div className='img-container-down-footer'>
                  <a
                    href={`https://wa.me/+542216748479/?text=Hola!%20Quiero%20comprar%20un%20pack%20de%20su%20pagina%20Pavitos`}
                    target="_blank"
                    rel="noopener noreferrer"
                  > 
                    <WhatsAppIcon style={{color: '#6f7e84d6'}}/> 
                  </a>
                </div>
              </div>
            </div>
            <div className='seccion-down-footer'>
              <p> Copyright © 2023. All Rights Reserved Pavitos </p>
            </div>
        </div>
    </footer>
  )
}
