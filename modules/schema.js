var normalize = require ('normalize-mongoose');
var mongoose = require('./dbConnect');

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
user.plugin(normalize);
const User = mongoose.model('user',user);


/* User.create({firstName:"Prakhar",lastName:"Vijay",email:"prakhar.18232@knit.ac.in",passwordHash:"password",admin:2},(err,res)=>{
    if(err) console.log(err);
    else{
        console.log("inserted");
    }}); */

const game = new Schema({
    name:{
        type: String
    },
    players:{
        type: Number
    },
    starts:{
        type: Date
    },
    rounds:{
        type:Number
    }
});
game.plugin(normalize);
mongoose.model('game',game);

module.exports = mongoose;
