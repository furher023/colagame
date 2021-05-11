function setSession(req,{name,email,admin}){
    req.session.user = {
        name: name,
        email: email,
        admin: admin
    };
}

module.exports = setSession;