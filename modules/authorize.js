function authorizeUser(req,res,next){
    if(req.session.user != undefined && req.session.user.admin == 0)
    next();
    else if(req.session.user != undefined && req.session.user.admin != 0)
    res.redirect('/admin/dashboard');
    else{
        req.error = 'Login to view page';
        res.redirect('/signIn');
    }
    
}

function authorizeAdmin(req,res,next){
    if(req.session.user != undefined && req.session.user.admin != 0)
    next();
    else if(req.session.user != undefined && req.session.user.admin == 0)
    res.redirect('/users/dashboard');
    else{
        req.error = 'Login to view page';
        res.redirect('/signIn');
    }
    
}

module.exports ={
    authorizeUser: authorizeUser,
    authorizeAdmin: authorizeAdmin
};
