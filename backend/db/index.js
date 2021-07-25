const mongoose = require('mongoose');

mongoose.connect('mongodb://root:root@localhost:27017',{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
 });
mongoose.Promise = global.Promise;

module.exports = mongoose;