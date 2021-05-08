function setSession(req,name,email){
    req.session.user = {
        name: name,
        email: email,
        admin: admin
    };
}

module.exports = {
    setSession: setSession
};