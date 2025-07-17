import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("ADD Mongo URI to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Use a global variable to preserve the client across hot reloads in development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client for every connection
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
