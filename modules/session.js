function setSession(req,{firstName,lastName,email,admin}){
    req.session.user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        admin: admin
    };
}

module.exports = setSession;