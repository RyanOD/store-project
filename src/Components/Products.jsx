import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { collection, getDocs } from 'firebase/firestore';
import db from '../_db/db';

export default function Products({ collectionName, cartItems }) {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, collectionName));
      setProducts(data.docs);
      setProductsLoaded(true);
    };
    getData();
  }, []);

  return (
    <div>
      <Row className='product__carousel'>
        {productsLoaded &&
          products.map((product) => {
            return <ProductCard product={product.data()} />;
          })}
      </Row>
    </div>
  );
}
