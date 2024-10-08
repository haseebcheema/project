const mongoose = require('mongoose');

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('mongodb connected');
    } catch (error) {
        console.error('mongodb connection error', error);
    }
};

module.exports = connectMongoDB;