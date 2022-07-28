import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name of product is required'],
      unique: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    countInStock: {
      type: Number,
      required: [true, 'Count in Stock is required'],
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
    },
    numReviews: {
      type: Number,
      required: [true, 'Number of Reviews is required'],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
