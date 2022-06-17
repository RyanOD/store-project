import React from 'react';
import './ProductCard.css';
import { Button, ButtonGroup, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <Col className='product-card' xs={6} md={4} lg={3}>
      <Card className='product-card__card mt-3 text-center'>
        <Link
          className='product-card__link'
          to={`/products/${product.category}/${product.model_number}/`}
        >
          <Card.Img
            className='product-card__image'
            src={product.image.v_front}
            alt={product.name}
          />
        </Link>
        <Card.Body className='product-card__body text-left'>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <ButtonGroup>
            <Button className='product-card__button btn-block mr-1 mt-1 btn-md'>
              <Link
                className='product-card__link'
                to={`/products/${product.category}/${product.model_number}/`}
              >
                Learn More
              </Link>
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
