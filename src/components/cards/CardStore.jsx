import React from 'react';
import '../../styles/cards/cardStore.css';
import { Link } from 'react-router-dom';


export default function CardStore({ id, type, rareza, name, price, img }) {
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
    }).format(price);

    return (
        <>
            <Link to={`/detalles/pack-${id}`} className={ type === 1 ? 'card type-one' : 'card type-two' }>
                <div className='card-head'>
                    <img alt='imagen' src={img}></img>
                </div>
                <div className={`card-body `+ rareza}>
                    <h5>{ name }</h5>
                    {/* <h6>pico</h6> */}
                    <div className='card-price'>
                        <span>ARS {formattedPrice}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}
