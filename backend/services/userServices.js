const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://naradhamybro:LeZCdAMbG0XVSvJa@cluster0.domca5x.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'test';
const collectionName = 'users';

async function connectToDatabase() {
    await client.connect();
    return client.db(dbName).collection(collectionName);
}
// getting all users
exports.getAllUsers = async () => {
    try {
        const collection = await connectToDatabase();
        const users = await collection.find().toArray();
        return users;
    } catch (error) {
        throw error;
    }
};
// get a particular user based on mail
exports.getUserByEmail = async (email) => {
    try {
        const collection = await connectToDatabase();
        const user = await collection.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw error;
    }
};
// update a particular user based on email
exports.updateUserByEmail = async (email, updatedUserData) => {
    try {
        const collection = await connectToDatabase();
        const result = await collection.updateOne({ email }, { $set: updatedUserData });
        if (result.modifiedCount === 0) {
            throw new Error('User not found');
        }
    } catch (error) {
        throw error;
    }
};
// deleting a particular user by email id
exports.deleteUserByEmail = async (email) => {
    try {
        const collection = await connectToDatabase();
        const result = await collection.deleteOne({ email });
        if (result.deletedCount === 0) {
            throw new Error('User not found');
        }
    } catch (error) {
        throw error;
    }
};