import bcrypt from 'bcryptjs';

const Data = {
  users: [
    {
      name: 'Casey',
      email: 'Casey@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Junior',
      email: 'Junior@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Nike shirt',
      slug: 'nike-shirt',
      category: 'Shirts',
      image: '/images/p1.webp', // 679px x 829px
      price: 60,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 20,
      description: 'High quality shirt',
    },
    {
      // _id: '2',
      name: 'Nike pants',
      slug: 'nike-pants',
      category: 'Pants',
      image: '/images/p2.webp',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality pant',
    },
    {
      // _id: '3',
      name: 'Adidas shirt',
      slug: 'adidas-shirt',
      category: 'Shirts',
      image: '/images/p3.webp',
      price: 40,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 15,
      description: 'High quality shirt',
    },
    {
      // _id: '4',
      name: 'Adidas pants',
      slug: 'adidas-pants',
      category: 'Pants',
      image: '/images/p4.webp',
      price: 100,
      countInStock: 10,
      brand: 'Adidas',
      rating: 5.0,
      numReviews: 20,
      description: 'High quality pant',
    },
  ],
};

export default Data;
