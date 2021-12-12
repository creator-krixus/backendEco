const mongoose = require('mongoose');

const connection = (app) => {
    mongoose.connect(process.env.URL_DB, {
        useNewUrlParser: true,
        useUnifiedtopology: true
    })
    .then(() => console.log('Data Base connected sucessfully'))
    .catch(error => console.error(error))
}

module.exports = connection;