import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { collection, getDocs } from 'firebase/firestore';
import db from '../_db/db';
import PropTypes from 'prop-types';

export default function Products({ collectionName }) {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, collectionName));
      setProducts(data.docs);
      setProductsLoaded(true);
    };
    getData();
  }, [collectionName]);

  return (
    <div>
      <h1 className='mt-4'>
        Our
        {' ' +
          collectionName.slice(0, 1).toUpperCase() +
          collectionName.slice(1) +
          ' '}
        Collection
      </h1>
      <Row className='product__carousel mt-2'>
        {productsLoaded &&
          products.map((product) => {
            return <ProductCard product={product.data()} />;
          })}
      </Row>
    </div>
  );
}

Products.propTypes = {
  collectionName: PropTypes.string.isRequired,
};
