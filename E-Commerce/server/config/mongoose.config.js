import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/E-Commerce_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Established a connection to the database'))
  .catch((err) =>
    console.log('Something went wrong when connecting to the database', err)
  );
