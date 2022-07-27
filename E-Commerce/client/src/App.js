import Main from './views/Main';
import Layout from './views/Layout';
import { Routes, Route } from 'react-router-dom';
import ProductView from './views/ProductView';

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
      </Routes>
    </div>
  );
}

export default App;
