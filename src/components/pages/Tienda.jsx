import React from 'react';
import '../../styles/pages/tienda.css';
import CardStore from '../cards/CardStore';
// import img1 from '../../images/fortnite-outfit-marshmello.jpg';
// import img2 from '../../images/fortnite-bundle-marshmello-pack.jpg';
// import imgClub from '../../images/club-fortnite.png';
// import pavos1000 from '../../images/1000VBucks.png';
// import pavos2800 from '../../images/2800VBucks.png';
// import pavos5000 from '../../images/5000VBucks.png';
// import pavos13500 from '../../images/13500VBucks.png';
// import paseOne from '../../images/pase-one.png';
// import packDeriva from '../../images/pack-derivacementerio.png';
// import packEscuadronCalavera from '../../images/pack-escuadroncalavera.png';
// import packDiaJuicio from '../../images/pack-diadeljuicio.png';
// import packJuicioFinal from '../../images/pack-juiciofinal.png';
// import packComputadoraCentral from '../../images/pack-computadoracentralpasada.png';
// import packCamaradasCrypta from '../../images/pack-camaradasdelacrypta.png';
// import packRepartidorRobotico from '../../images/pack-repartidorrobotico.png';
// import packClubEncadenadas from '../../images/pack-clubestacasencadenadas.png';
// import packLeyendasAnime from '../../images/pack-leyendasanime.png';
// import packExtinction from '../../images/pack-extinction.png';
// import packAcademiaSaint from '../../images/pack-academiasaint.png';
import data from '../data/data.js';

export default function Tienda() {
  // console.log(data);

  // const arrayData = Object.values(data);

  // console.log(arrayData);

  return (
    <>
        <div className='container-tienda'>
            <div className='container-tittles-cards'>

              {
                data.map(e => (
                  <>
                    <div key={e.id} id={ e.id === '1' ? 'pavos' : '' } className='tittles-tienda'>
                      <em> { e.tittle } </em>
                    </div>
                    <div key={e.id + 1} className={e.classname}>
                      {
                        e['data-card'].map(card => (
                            <CardStore key={card.id} id={card.id} type={card.type} rareza={e.rareza} name={card.name} price={card.price} img={card['image-url']}/>
                        ))
                      }
                    </div>
                  </>
                ))
              }
            </div>
            <div>
              
            </div>
        </div>
    </>
  )
}
