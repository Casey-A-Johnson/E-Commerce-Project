import exprees from 'express';
import Product from '../models/product.model.js';
import Data from '../Data.js';

const seedRouter = exprees.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(Data.products);
  res.send({ createdProducts });
});

export default seedRouter;
