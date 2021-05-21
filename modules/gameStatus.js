const db = require('./dbConnect');
let game  = db.model('game');

function status(gameId){

    return new Promise((resolve,reject)=>{
        game.find({_id:gameId},(err,result)=>{
            if(err) console.log(err);
            if(result!= null) resolve(result);
            else if (result == null) reject('No such game exists');
        });
    });
    
}

module.exports = status;