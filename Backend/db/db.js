const mongoose = require('mongoose');


function connecttoDb() {
    mongoose.connect(process.env.DB_CONNECTION, 

    ).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => console.log(err));
  }


module.exports = connecttoDb;

