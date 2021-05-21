const db = require('./dbConnect');
let register  = db.model('register');

function setSession(req,{firstName,lastName,email,admin}){
    req.session.user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        admin: admin
    };
    return new Promise((resolve)=>{
        register.find({user: email, status: true},(err,result)=>{
            if(err) console.log(err)
            else{
                    req.session.user.gameData=result;
                    resolve();
                }
                
        })
    });
}

module.exports = setSession;