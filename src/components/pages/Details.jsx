import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.js';
import '../../styles/pages/details.css';
import { Link } from 'react-router-dom';

export default function Details() {
  const [card, setCard] = useState();
  const {id} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDatosCard()
  });

  const getDatosCard = () => {
    const cardFind = data
      .map(entry => entry['data-card'])
      .flat()
      .find(c => c.id === id.slice(-4));

    setCard(cardFind);
    setLoading(false);
    console.log(card);
  }

  return (
    <div className='card-details-container'>
      {
        !loading && (
          <div className='details-container'>
            <div className='img-description-container'>
              <div className='img-container-details'>
                <img alt='' src={card['image-url']}></img>
              </div>
              <div className='description-container'>
                <p> {card.description} </p>
              </div>
            </div>
            <div className='price-more-container'> 
              <img alt='' src={card['image-url']}></img>
              <h3> { card.name } </h3>
              <div className='warning-container'>
                <Link to={'/ayuda'}> ¿Cómo comprar? </Link>
                <p> Los objetos de la tienda de Fortnite se actualizan cada 24hs. </p>
                <p> Es posible que algunos objetos no estén en la tienda de Fortnite. </p>
                <p style={{background: '#10c45b30', padding: '5px 10px', textAlign: 'center', borderRadius: '80px'}}> Pagos unicamente por transferencia </p>
              </div>
              <span> ARS { Intl.NumberFormat('es-AR', {style: 'currency',currency: 'ARS',minimumFractionDigits: 2,}).format(card.price) } </span>
              <button>
                <a
                  href={`https://wa.me/+542216748479/?text=Hola!%20Quiero%20comprar%20el%20pack%20de%20${card.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar Ahora
                </a>
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}
