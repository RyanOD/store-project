import React from 'react';
//import data from './_data/guitarData.json';
import ProductCard from './Components/ProductCard';
import { Carousel } from 'react-responsive-carousel';
import banner1 from './Assets/pedal-banner.png';
import banner2 from './Assets/mustang-banner.png';
import banner3 from './Assets/accessories-banner.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home({ data }) {
  return (
    <>
      <Row className='d-none d-md-block'>
        <section className='hero'>
          <Carousel
            className='carousel'
            showThumbs={false}
            showStatus={false}
            dynamicHeight={true}
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
          >
            <div>
              <div className='carousel-hero'>
                <h1 className='carousel-hero__heading'>
                  Putting the metal
                  <br />
                  to the pedal
                </h1>
                <Button className='carousel-hero__cta'>
                  <Link className='carousel-hero__link' to='/effects/'>
                    Get yours today
                  </Link>
                </Button>
              </div>
              <img className='carousel__image' src={banner1} alt='' />
            </div>
            <div>
              <div className='carousel-hero'>
                <h1 className='carousel-hero__heading'>
                  Standing at the
                  <br />
                  crossroads
                </h1>
                <Button className='carousel-hero__cta'>
                  <Link className='carousel-hero__link' to='/guitars/'>
                    Get yours today
                  </Link>
                </Button>
              </div>
              <img className='carousel__image' src={banner2} />
            </div>
            <div>
              <img className='carousel__image' src={banner3} />
            </div>
          </Carousel>
        </section>
      </Row>
      <Row className='product__carousel'>
        {data.map((product) => {
          return <ProductCard product={product.data()} />;
        })}
      </Row>
    </>
  );
}
