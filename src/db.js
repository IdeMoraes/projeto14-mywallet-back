import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()
const banco = process.env.BANCO;

const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();
const db = mongoClient.db(banco);

export default db;