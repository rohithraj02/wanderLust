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

exports.registerUser = async (userData) => {
    try {
        const { name, email, password } = userData;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const collection = await connectToDatabase();
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            throw new Error('Email is already registered');
        }
        const newUser = {
            name,
            email,
            password: hashedPassword
        };
        await collection.insertOne(newUser);
        return newUser;
    } catch (error) {
        throw error;
    }
};

exports.loginUser = async (userData) => {
    try {
        const { email, password } = userData;
        const collection = await connectToDatabase();
        const user = await collection.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Invalid password');
        }
        delete user.password;
        return user;
    } catch (error) {
        throw error;
    }
};
