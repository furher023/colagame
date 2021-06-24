const db = require('./dbConnect');
let game  = db.model('game');

function status(gameId){

    return new Promise((resolve,reject)=>{
        console.log(gameId);
        game.find({id:gameId},(err,result)=>{
            if(err) console.log(err);
            console.log(result[0]);
            if(result!= null) resolve(result[0]);
            else if (result == null) reject('No such game exists');
        });
    });
    
}

module.exports = status;