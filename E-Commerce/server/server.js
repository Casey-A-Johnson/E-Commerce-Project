import express from 'express';
import Data from './Data.js';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/product.routes.js';
import userRouter from './routes/user.routes.js';

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
app.use(express.json());
app.use(express.urlencoded({ extened: true }));

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
