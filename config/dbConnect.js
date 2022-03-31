const mongoose = require('mongoose');

const dbConnect = async() => {
    try{
        if(mongoose.connection.readyState >= 1) {
            return;
        }
    
        await mongoose.connect(process.env.DB_URL);
        console.log('Successfully connected Database');
    }
    catch(error) {
        console.log(error.message);
    }
}

module.exports = dbConnect;