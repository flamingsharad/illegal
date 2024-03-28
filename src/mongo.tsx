// mongo.ts
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // MongoDB connection URI
const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export { client, connectToMongo };
