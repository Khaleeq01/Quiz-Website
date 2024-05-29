import mongoose from 'mongoose';
import { config } from 'dotenv';

config(); // Load .env variables

const connect = async () => {
  const uri = process.env.ATLAS_URI;
  console.log('Connecting to:', uri);
  if (!uri) {
    throw new Error('ATLAS_URI is not defined in the environment variables');
  }
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Database Connected');
};

export default connect;
