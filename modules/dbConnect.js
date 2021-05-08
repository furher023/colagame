const mongoose = require('mongoose');
var normalize = require ('normalize-mongoose');

//Connecting to the database
const options= {   useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: false,
    useCreateIndex: true 
  };

mongoose.connect('mongodb://localhost:27017/cola',options,(error)=>{ 
    if(error){
        console.log(error);
    }
    else{
        console.log("Successfully connected to database");
    }
});

const Schema = mongoose.Schema;

const user = new Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    passwordHash:{
        type:String
    },
    admin:{
        type: Number,
        default: 0
    }
});
mongoose.model('user',user);

module.exports= mongoose;