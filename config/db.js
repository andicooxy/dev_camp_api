const mongoose = require('mongoose');

const connectDb = async() => {
    const conn = await mongoose.connect(process.env.MONGOOS_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    console.log(`MongoDb Connect ${conn.connection.host}`.yellow.bold);
};


module.exports = connectDb