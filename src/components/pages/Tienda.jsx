import React from 'react';
import '../../styles/components/tienda.css';
import CardStore from '../cards/CardStore';
import img1 from '../../images/fortnite-outfit-marshmello.jpg';
import img2 from '../../images/fortnite-bundle-marshmello-pack.jpg';
import imgClub from '../../images/club-fortnite.png';
import pavos1000 from '../../images/1000VBucks.png';
import pavos2800 from '../../images/2800VBucks.png';
import pavos5000 from '../../images/5000VBucks.png';
import pavos13500 from '../../images/13500VBucks.png';
import paseOne from '../../images/pase-one.png';
import packDeriva from '../../images/pack-derivacementerio.png';
import packEscuadronCalavera from '../../images/pack-escuadroncalavera.png';
import packDiaJuicio from '../../images/pack-diadeljuicio.png';
import packJuicioFinal from '../../images/pack-juiciofinal.png';
import packComputadoraCentral from '../../images/pack-computadoracentralpasada.png';
import packCamaradasCrypta from '../../images/pack-camaradasdelacrypta.png';
import packRepartidorRobotico from '../../images/pack-repartidorrobotico.png';
import packClubEncadenadas from '../../images/pack-clubestacasencadenadas.png';
import packLeyendasAnime from '../../images/pack-leyendasanime.png';
import packExtinction from '../../images/pack-extinction.png';

export default function Tienda() {
  return (
    <>
        <div className='container-tienda'>
            <div className='container-tittles-cards'>
              <div id='pavos' className='tittles-tienda'>
                  <em>pavos</em>
              </div>
              <div className='pavos-container'>
                <CardStore type={1} rareza={'legendary'} img={pavos1000}/>
                <CardStore type={1} rareza={'legendary'} img={pavos2800}/>
                <CardStore type={1} rareza={'legendary'} img={pavos5000}/>
                <CardStore type={1} rareza={'legendary'} img={pavos13500}/>
              </div>
              <div className='tittles-tienda'>
                  <em>destacado</em>
              </div>
              <div className='cards-store-container'>
                <CardStore type={1} rareza={'raro'} img={img1}/>
                <CardStore type={2} rareza={'raro'} img={img2}/>
                <CardStore type={1} rareza={'raro'} img={img1}/>
                <CardStore type={1} rareza={'raro'} img={img1}/>
              </div>
              <div className='tittles-tienda'>
                  <em>pase de batalla</em>
              </div>
              <div className='pase-batalla-container'>
                <CardStore type={2} rareza={'epic'} img={paseOne}/>
                <CardStore type={2} rareza={'epic'} img={paseOne}/>
              </div>
              <div className='tittles-tienda'>
                  <em>club de fortnite</em>
              </div>
              <div className='club-container'>
                <img alt='club' src={imgClub}></img>
              </div>
              <div className='tittles-tienda'>
                  <em>packs especiales</em>
              </div>
              <div className='packs-container'>
                <CardStore type={1} rareza={'pococomun'} img={packDeriva}/>
                <CardStore type={1} rareza={'pococomun'} img={packEscuadronCalavera}/>
                <CardStore type={1} rareza={'pococomun'} img={packDiaJuicio}/>
                <CardStore type={2} rareza={'pococomun'} img={packJuicioFinal}/>
                <CardStore type={1} rareza={'pococomun'} img={packComputadoraCentral}/>
                <CardStore type={2} rareza={'pococomun'} img={packCamaradasCrypta}/>
                <CardStore type={1} rareza={'pococomun'} img={packRepartidorRobotico}/>
                <CardStore type={1} rareza={'pococomun'} img={packClubEncadenadas}/>
                <CardStore type={2} rareza={'pococomun'} img={packLeyendasAnime}/>
                <CardStore type={2} rareza={'pococomun'} img={packExtinction}/>
              </div>

              {/* {[...new Array(92)]
                  .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                  )
                  .join('\n')} */}
            </div>

        </div>
    </>
  )
}
