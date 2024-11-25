const mongoose = require('mongoose');
function connectDatabase(){
    mongoose.connect('mongodb://0.0.0.0/drive').then(()=>{
        console.log('connect to database');
    })
}
module.exports = connectDatabase;