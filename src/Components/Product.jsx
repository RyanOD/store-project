import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
import { Button, Row, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Product({ data, onAddToCartHandler, cartItems }) {
  let { modelNumber } = useParams();

  let inCart = false;

  if (cartItems) {
    inCart = cartItems.find(
      (product) => product.model_number === parseInt(modelNumber)
    );
  }

  let product = data.filter(
    (productData) => productData.data().model_number === parseInt(modelNumber)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='product'>
      <h1 className='product__title'>{product[0].data().name}</h1>
      <p>Model #: {product[0].data().model_number}</p>
      <Row>
        <Col xs={12} md={8} className='product-hero'>
          {product[0].data().category === 'guitars' && (
            <Image
              fluid
              className='product-hero__image--h'
              src={product[0].data().image.h_front}
              alt={product[0].data().name}
            />
          )}
          {product[0].data().category === 'effects' && (
            <Image
              fluid
              className='product-hero__image--h'
              src={product[0].data().image.v_front}
              alt={product[0].data().name}
            />
          )}
        </Col>
        <div className='col product-hero__cta'>
          <h4>${product[0].data().price}</h4>
          <Button
            className='product-hero__link'
            onClick={() => onAddToCartHandler(product)}
          >
            Add to cart {inCart && `(in cart - ${inCart && inCart.qty})`}
          </Button>
        </div>
      </Row>
      <Row>
        <h3 className='product__headline--overview'>Overview</h3>
        {product[0].data().description.map((description, index) => {
          return <p key={index}>{description}</p>;
        })}
      </Row>
      <Row className='mt-4'>
        <h3>Features</h3>
      </Row>
      <Row>
        <ul className='product__features'>
          {Array.from(product[0].data().features).map((feature, index) => {
            return (
              <li className='product__feature' key={index}>
                {feature}
              </li>
            );
          })}
        </ul>
      </Row>
    </div>
  );
}

Product.propTypes = {
  data: PropTypes.array.isRequired,
  onRemoveFromCartHandler: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};
