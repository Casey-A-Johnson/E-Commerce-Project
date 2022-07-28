import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';

const CartView = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry, Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Shopping cart</h1>
      </div>
      <div>
        <div>
          {cartItems.length === 0 ? (
            <p>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="container text-center"
                  style={{ marginTop: '20px' }}
                >
                  <div class="row align-items-center">
                    <div class="col">
                      <img
                        style={{ width: '100px', height: '100px' }}
                        src={item.image}
                        alt={item.name}
                      />
                      <Link to={`/api/product/${item.slug}`}>{item.name}</Link>
                    </div>
                    <div class="col">
                      <button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </button>
                    </div>
                    <div class="col">${item.price}</div>
                    <div class="col">
                      <button onClick={() => removeItemHandler(item)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="" style={{ marginTop: '20px' }}>
            <div>
              <h3 style={{ textAlign: 'center', marginTop: '20px' }}>
                Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}
                items): $
                {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <button
                  disabled={cartItems.length === 0}
                  className="btn btn-primary"
                  onClick={checkoutHandler}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartView;
