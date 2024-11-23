const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost/Sushi_web'

mongoose.connect(MONGODB_URI, {

})
    .then(db => console.log('Database esta conectada'))
    .catch(err => console.log(err));