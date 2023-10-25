import React from 'react';
import '../../styles/layout/footer.css';
import whatsApp  from '../../images/whatsapp.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='seccion-up-footer'>
              <div className='seccion-op'>
                <a href='!#'> Inicio </a>
                <a href='!#'> Ayuda </a>
              </div>
              <div className='seccion-img'>
                <div className='img-container-down-footer'>
                  <a href='!#'> <WhatsAppIcon style={{color: '#000'}}/> </a>
                </div>
              </div>
            </div>
            <div className='seccion-down-footer'>
              <p> Copyright © 2023. All Rights Reserved Tomas Regalado </p>
            </div>
        </div>
    </footer>
  )
}
