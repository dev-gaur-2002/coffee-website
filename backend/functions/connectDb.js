const mongoose = require('mongoose')

const connectDB =  (connectionString)=>{
    mongoose.connect(connectionString,{
        useNewUrlParser:true,
        // useCreateIndex:true,
        // useFindAndModify:false,
        useUnifiedTopology:true,
    }).then(console.log('connected successfully'))
    .catch((error)=>console.log(error))
}

module.exports = connectDB