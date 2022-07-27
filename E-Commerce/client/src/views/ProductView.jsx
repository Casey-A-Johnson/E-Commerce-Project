import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import logger from 'use-reducer-logger';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductView = (props) => {
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
  const { slug } = useParams();
  const { rating } = props;
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div style={{ marginTop: '20px' }}>
      <div style={{ justifyContent: 'space-evenly', display: 'flex' }}>
        <div>
          <img className="img-Large" src={product.image} alt={product.name} />
        </div>
        <div>
          <h1>{product.name}</h1>
          <hr />
          <p>
            Product Reviews:
            <p>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </p>
          </p>
          <hr />
          <p>Price: ${product.price}</p>
          <hr />
          <p>
            Product Description:<p>{product.description}</p>
          </p>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <p>Price: ${product.price}</p>
              <p>
                Status:
                {product.countInStock > 0 ? (
                  <p style={{ color: 'green' }}>In Stock</p>
                ) : (
                  <p style={{ color: 'red' }}>Unavailable</p>
                )}
              </p>
              {product.countInStock > 0 && (
                <button className="btn btn-primary">Add to Cart</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
