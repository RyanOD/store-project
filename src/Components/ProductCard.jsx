import React from 'react';
import './ProductCard.css';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  console.log(product);
  return (
    <Col>
      <Card className='mt-3 text-center'>
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
          <Button>
            <Link
              className='product-card__link'
              to={`/products/${product.category}/${product.model_number}/`}
            >
              Learn More
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
