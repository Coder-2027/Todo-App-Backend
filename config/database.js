const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGODB_URL);

exports.dbconnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then( () => { console.log("Db connected successfully")})
    .catch( (err) => { 
        console.error(err)
        console.log('connection failed');

        process.exit(1);
     })
}