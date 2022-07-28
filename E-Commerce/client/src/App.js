import Main from './views/Main';
import Layout from './views/Layout';
import { Routes, Route } from 'react-router-dom';
import ProductView from './views/ProductView';
import CartView from './views/CartView';
import SignIn from './views/SignIn';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path="/api/product/:slug"
          element={
            <Layout>
              <ProductView />
            </Layout>
          }
        />
        <Route
          path="/api/cart"
          element={
            <Layout>
              <CartView />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
