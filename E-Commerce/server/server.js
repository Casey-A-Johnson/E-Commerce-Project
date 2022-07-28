import express from 'express';
import Data from './Data.js';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/product.routes.js';

mongoose
  .connect('mongodb://localhost/E-Commerce_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Established a connection to the database'))
  .catch((err) =>
    console.log('Something went wrong when connecting to the database', err)
  );

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
