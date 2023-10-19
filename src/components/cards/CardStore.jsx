import React from 'react';
import '../../styles/cards/cardStore.css';


export default function CardStore({ type, rareza, img }) {
  return (
    <>
        <div className={ type === 1 ? 'card type-one' : 'card type-two' }>
            <div className='card-head'>
                <img alt='imagen' src={img}></img>
            </div>
            <div className={`card-body `+ rareza}>
                <h5>rickinillo</h5>
                <h6>pico</h6>
                <div className='card-price'>
                    <span>ARS $ 1.500,00</span>
                </div>
            </div>
        </div>
    </>
  )
}
