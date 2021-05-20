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
    teams:{
        type: Number
    },
    startTime:{
        type: Date
    },
    rounds:{
        type:Number,
        default:12
    },
    currentRound:{
        type: Number,
        default: 0
    },
    data:{
        type: Array
    },
    creator:{
        type: String
    }
});
game.plugin(normalize);
mongoose.model('game',game);

const team = new Schema({
    name:{
        type: String
    },
    member:{
        type: String
    },
    gameId:{
        type: String
    },
    role:{
        type: Number,
        default: 0
    }
});

team.plugin(normalize);
mongoose.model('team',team)

const register = new Schema({
    game:{
        type: String
    },
    team:{
        type: String
    },
    user:{
        type: String
    }
});

register.plugin(normalize);
mongoose.model('register',register);

module.exports = mongoose;
