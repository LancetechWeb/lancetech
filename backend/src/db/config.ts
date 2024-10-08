import mongoose from 'mongoose';
import session from 'express-session';
import MongoDBStore from 'connect-mongodb-session'


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('...successful connection');
  } catch (error) {
    console.log(error);
  }
};


/**
 * sets up mongoDB session store. RedisStore is also an alternative to consider in the future
 */

