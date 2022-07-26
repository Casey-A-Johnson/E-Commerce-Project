import Main from './views/Main';
import Layout from './views/Layout';
import { Routes, Route } from 'react-router-dom';

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
      </Routes>
    </div>
  );
}

export default App;
