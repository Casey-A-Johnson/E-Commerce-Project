import exprees from 'express';
import Product from '../models/product.model.js';
import Data from '../Data.js';
import User from '../models/user.model.js';

const seedRouter = exprees.Router();

seedRouter.get('/', async (req, res) => {
  //   await Product.remove({});
  //   const createdProducts = await Product.insertMany(Data.products);
  //   res.send({ createdProducts });

  await User.remove({});
  const createdUsers = await User.insertMany(Data.users);
  res.send({ createdUsers });
});

export default seedRouter;
