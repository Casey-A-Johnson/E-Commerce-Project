import React from 'react';
// import Data from '../components/Data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import logger from 'use-reducer-logger';
import Rating from './Rating';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductList = () => {
  //   const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 style={{ padding: '15px', textAlign: 'center' }}>
          Featured Products
        </h1>
        <div className="products">
          {loading ? (
            <div> Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            products.map((product) => (
              <div
                key={product.slug}
                className="card"
                style={{ border: '1px solid black' }}
              >
                <Link to={`/api/product/${product.slug}`}>
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>

                <div className="card-body" style={{ padding: '15px' }}>
                  <Link to={`/api/product/${product.slug}`}>
                    <p className="card-title">{product.name}</p>
                  </Link>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                  <p className="card-text">
                    <strong>${product.price}</strong>
                  </p>
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
